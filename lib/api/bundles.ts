import { API_URL } from "../../config/constants";

export interface BundleStatisticsResponse {
  bundle_statistics: {
    bundle_timestamps: string[];
    bundles_by_timestamp: number[];
    profit_by_timestamp: string[];
    profit_timestamps: string[];
  };
}

export async function fetchBundleStatistics(chainID: string) {
  const response = await fetch(
    `${API_URL}/v1/bundle_statistics?&chain_id=${chainID}`,
    {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const responseJson = await response.json();
  return responseJson as BundleStatisticsResponse;
}

interface BundleDataJSON {
  bundle_hash: string;
  height: number;
  txs: string;
  payment: string;
  was_mined: boolean;
  address_submitted: string;
  timestamp: number;
}

interface FetchBundlesResponse {
  info: {
    winning_bundles: number;
    losing_bundles: number;
    total_payment: string;
    bundle_data: BundleDataJSON[];
  };
}

export async function fetchBundles(
  chainID: string,
  height: number,
  addressSubmitted: string,
  limit: number,
  offset: number,
  orderBy: string,
  sortAsc: boolean
) {
  const response = await fetch(
    `${API_URL}/v1/get_bundles?&chain_id=${chainID}&height=${height}&address_submitted=${addressSubmitted}&limit=${limit}&offset=${offset}&sort_asc=${sortAsc}&order_by=${orderBy}`,
    {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  const responseJson = (await response.json()) as FetchBundlesResponse;

  const bundles = [];
  for (const bundle of responseJson.info.bundle_data) {
    bundles.push({
      bundleHash: bundle.bundle_hash,
      height: bundle.height,
      txs: bundle.txs.split(","),
      payment: bundle.payment,
      wasMined: bundle.was_mined,
      addressSubmitted: bundle.address_submitted,
      timestamp: bundle.timestamp,
    });
  }

  return {
    winningBundles: responseJson.info.winning_bundles,
    losingBundles: responseJson.info.losing_bundles,
    totalPayment: responseJson.info.total_payment,
    bundleData: bundles,
  };
}

export interface BundleTransaction {
  payment_transaction: string;
  validator_profit: string;
  height: number;
  timestamp: string;
}

export interface BundlesByValidatorResponse {
  bundles: BundleTransaction[];
}

export async function fetchBundlesByValidator(
  signer: string,
  operAddress: string,
  chainID: string,
  year: number
) {
  const response = await fetch(
    `${API_URL}/v1/bundles_by_validator?signer=${signer}&chain_id=${chainID}&operator_address=${operAddress}&year=${year}`,
    {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const responseJson = await response.json();

  return (responseJson as BundlesByValidatorResponse).bundles.map((bundle) => ({
    paymentTransaction: bundle.payment_transaction,
    validatorProfit: bundle.validator_profit,
    height: bundle.height,
    timestamp: bundle.timestamp,
  }));
}
