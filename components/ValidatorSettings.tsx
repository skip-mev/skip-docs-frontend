import { useQuery } from "@tanstack/react-query";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/router";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { denoms, rpcUrls } from "../config/constants";
import {
  fetchBundlesByValidator,
  fetchValidatorConfig,
  setPaymentAddress,
  setPaymentPercentage,
} from "../lib/api";
import Select from "./Select";
import SettingControl from "./SettingControl";
import { formatUnits } from "ethers";

function useValidatorConfig(chainID: string) {
  return useQuery({
    queryKey: ["validator-config", chainID],
    queryFn: async () => {
      const address = localStorage.getItem("account_address");

      if (!address) {
        throw new Error("No connected wallet address found.");
      }

      const validatorConfig = await fetchValidatorConfig(address, chainID);

      return {
        ...validatorConfig,
        accountAddress: address,
      };
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    enabled: !!chainID,
  });
}

const ValidatorSettings: FC = () => {
  const [selectedYear, setSelectedYear] = useState<string | undefined>();
  const [isDownloading, setIsDownloading] = useState(false);
  const hiddenDownloadLink = useRef<HTMLAnchorElement>(null);

  const [chainID, setChainID] = useState<string | undefined>();

  useEffect(() => {
    const fromStorage = localStorage.getItem("selected_chain");
    if (!fromStorage) {
      router.push("/registration");
      return;
    }

    setChainID(fromStorage);
  }, []);

  const chain = useMemo(() => {
    if (!chainID) {
      return undefined;
    }

    return Object.values(rpcUrls).find((chain) => chain.chainId === chainID);
  }, [chainID]);

  const router = useRouter();

  const { data: validatorConfig, refetch } = useValidatorConfig(chainID ?? "");

  const downloadBundleCSV = async (year: string) => {
    if (!chainID || !validatorConfig) {
      return;
    }

    setSelectedYear(year);

    setIsDownloading(true);

    const validatorBundles = await fetchBundlesByValidator(
      validatorConfig.accountAddress,
      validatorConfig.operatorAddress,
      chainID,
      parseInt(year)
    );

    const denom = denoms[chainID];

    const sortedBundles = [...validatorBundles].sort((a, b) => {
      return parseISO(b.timestamp).getTime() - parseISO(a.timestamp).getTime();
    });

    let csvStr =
      "data:text/csv;charset=utf-8,Date,Received Quantity, Received Currency, Transaction\n";

    for (const bundle of sortedBundles) {
      if (bundle.validatorProfit === "0") {
        continue;
      }
      const timestamp = format(
        parseISO(bundle.timestamp),
        "MM/dd/yyyy HH:mm:ss"
      );
      csvStr += `${timestamp},${formatUnits(
        bundle.validatorProfit,
        denom.decimals
      )},${denom.denom},${bundle.paymentTransaction}\n`;
    }
    if (hiddenDownloadLink.current) {
      hiddenDownloadLink.current.href = csvStr;
      hiddenDownloadLink.current.download = `${validatorConfig.operatorAddress}-${year}-skip-revenue.csv`;
      hiddenDownloadLink.current.click();
    }

    setIsDownloading(false);
  };

  if (!chain) {
    return null;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">{chain.chainName} MEV Settings</h1>
      <p className="text-base">
        Skip asks you to sign and receive an API key once, which can then be
        used to connect to the Skip relayer and begin receiving MEV rewards.
        This requires you to sign with your operator key, the same key used to
        sign governance votes.
      </p>
      {validatorConfig && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
          <SettingControl label="Chain ID" value={chain.chainId} />
          <SettingControl
            canCopy
            label="Wallet Address"
            value={validatorConfig.accountAddress}
          />
          <SettingControl
            canCopy
            label="Validator Address"
            value={validatorConfig.operatorAddress}
          />
          <SettingControl
            canCopy
            label="API Key"
            value={validatorConfig.apiKey}
          />
          <SettingControl
            canCopy
            description="Where do you want to send your MEV?"
            editable
            label="Payment Address"
            onSave={async (newPaymentAddress) => {
              await setPaymentAddress(
                validatorConfig.accountAddress,
                chain.chainId,
                newPaymentAddress
              );

              await refetch();
            }}
            value={validatorConfig.paymentAddress}
          />
          <SettingControl
            description="How much of the MEV revenue do you want to keep for yourself? (The rest gets split among network stakers)"
            editable
            label="Payment Percentage"
            onSave={async (newPaymentPercentage) => {
              await setPaymentPercentage(
                validatorConfig.accountAddress,
                chain.chainId,
                newPaymentPercentage
              );

              await refetch();
            }}
            value={`${validatorConfig.paymentPercentage}`}
          />
          <div className="space-y-3">
            <div className="flex flex-col lg:flex-row items-start gap-3 lg:items-center lg:justify-between">
              <div className="space-y-3 ">
                <p className="font-bold">Skip Taxes</p>
                <p className="text-white/60 text-sm italic">
                  Download your Skip transactions on {chain.chainName}
                  <sup>*</sup>
                </p>
              </div>
              <div className="relative">
                <Select
                  alignMenu="right"
                  buttonClassName={`bg-[#F3F6F8]/5 text-base px-4 py-5 pr-3 rounded-lg flex items-center justify-between gap-4 w-52 ${
                    isDownloading && "opacity-0"
                  }`}
                  placeholder="Select year"
                  onChange={(value) => {
                    console.log({ value, selectedYear });
                    if (value !== "" && value !== selectedYear) {
                      downloadBundleCSV(value);
                    }
                  }}
                  value={selectedYear}
                >
                  <Select.Option value="2022" />
                  <Select.Option value="2023" />
                </Select>
                {isDownloading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="animate-spin h-6 w-6 text-white/50"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            <p className="text-white/60 text-sm italic">
              <sup>*</sup>CSV does not include all payments recieved by your
              address, it only includes payment transactions from Skip.
            </p>
            <a className="hidden" ref={hiddenDownloadLink}>
              Hidden CSV Link
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValidatorSettings;
