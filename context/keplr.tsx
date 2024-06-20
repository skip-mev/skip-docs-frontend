import { AccountData } from "@keplr-wallet/types";
import { createContext, FC, useContext } from "react";
import { rpcUrls } from "../config/constants";
import useLocalStorage from "../hooks/useLocalStorage";

interface KeplrContext {
  account?: AccountData;
  setAccount: (account: AccountData) => void;
  chainID?: string;
  selectChain: (chainID: string) => void;
}

export const KeplrContext = createContext<KeplrContext>({
  setAccount: () => {},
  selectChain: () => {},
});

export const KeplrProvider: FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [account, setAccount] = useLocalStorage<AccountData | undefined>(
    "connected-account",
    undefined
  );

  const [chainID, setChainID] = useLocalStorage<string | undefined>(
    "selected-chain",
    "phoenix-1"
  );

  return (
    <KeplrContext.Provider
      value={{
        account,
        setAccount,
        chainID,
        selectChain: setChainID,
      }}
    >
      {children}
    </KeplrContext.Provider>
  );
};

// export function useChain() {
//   const ctx = useContext(KeplrContext);

//   const chain = ctx.chainID
//     ? Object.values(rpcUrls).find((chain) => chain.chainId === ctx.chainID)
//     : undefined;

//   return {
//     chain,
//     chainID: ctx.chainID,
//     selectChain: ctx.selectChain,
//   };
// }

export function useConnectedAccount() {
  const ctx = useContext(KeplrContext);

  return ctx.account;
}

export function useConnectKeplr() {
  const ctx = useContext(KeplrContext);

  return async (chainID: string) => {
    if (!window.keplr) {
      return;
    }

    try {
      try {
        await window.keplr.enable(chainID);
      } catch {
        try {
          // @ts-ignore
          const chainInfo = rpcUrls[chainID];

          if (!chainInfo) {
            return;
          }

          await window.keplr.experimentalSuggestChain(chainInfo);
        } catch {
          console.log("couldn't add network");
        }
      }

      const offlineSigner = window.keplr.getOfflineSigner(chainID);
      const accounts = await offlineSigner.getAccounts();

      const account = accounts[0];
      ctx.setAccount(account);
    } catch (e) {
      console.log(e);
    }
  };
}
