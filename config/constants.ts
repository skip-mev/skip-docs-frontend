export const API_URL = "/api";

export const rpcUrls = { 
  "comdex-1": {
    rpc: "https://rpc.comdex.one",
    rest: "https://rest.comdex.one",
    chainId: "comdex-1",
    chainName: "Comdex Mainnet",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "comdex",
      bech32PrefixAccPub: "comdexpub",
      bech32PrefixValAddr: "comdexvaloper",
      bech32PrefixValPub: "comdexvaloperpub",
      bech32PrefixConsAddr: "comdexvalcons",
      bech32PrefixConsPub: "comdexvalconspub",
    },
    currencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        isStakeCurrency: true,
        isFeeCurrency: true,
      },
      {
        coinDenom: "CMST",
        coinMinimalDenom: "ucmst",
        coinDecimals: 6,
        pegMechanism: "collateralized",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
      },
    ],
    stakeCurrency: {
      coinDenom: "CMDX",
      coinMinimalDenom: "ucmdx",
      coinDecimals: 6,
    },
    features: ["ibc-transfer"],
  },
  "comdex-test2": {
    rpc: "https://test2-rpc.comdex.one",
    rest: "https://test2-rest.comdex.one",
    chainId: "comdex-test2",
    chainName: "Comdex Testnet",
    stakeCurrency: {
      coinDenom: "CMDX",
      coinMinimalDenom: "ucmdx",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "comdex",
      bech32PrefixAccPub: "comdexpub",
      bech32PrefixValAddr: "comdexvaloper",
      bech32PrefixValPub: "comdexvaloperpub",
      bech32PrefixConsAddr: "comdexvalcons",
      bech32PrefixConsPub: "comdexvalconspub",
    },
    currencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        isStakeCurrency: true,
        isFeeCurrency: true,
      },
      {
        coinDenom: "CMST",
        coinMinimalDenom: "ucmst",
        coinDecimals: 6,
        pegMechanism: "collateralized",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
      },
    ],
    features: ["ibc-transfer"],
  },
  "injective-1": {
    chainId: "injective-1",
    chainName: "Injective Mainnet",
    rpc: "https://injective-rpc.polkachu.com",
    rest: "https://injective-api.polkachu.com",
    stakeCurrency: {
      coinDenom: "inj",
      coinMinimalDenom: "inj",
      coinDecimals: 18,
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "inj",
      bech32PrefixAccPub: "injpub",
      bech32PrefixValAddr: "injvaloper",
      bech32PrefixValPub: "injvaloperpub",
      bech32PrefixConsAddr: "injvalcons",
      bech32PrefixConsPub: "injvalconspub",
    },
    currencies: [
      {
        coinDenom: "inj",
        coinMinimalDenom: "inj",
        coinDecimals: 18,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "inj",
        coinMinimalDenom: "inj",
        coinDecimals: 18,
      },
    ],
    gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.04,
    },
    features: ["eth-address-gen", "eth-key-sign"],
    beta: true,
  },
  "injective-888": {
    chainId: "injective-888",
    chainName: "Injective Testnet",
    rpc: "http://injective-888-api.skip.money",
    rest: "http://injective-888-node.skip-internal.money:1317",
    stakeCurrency: {
      coinDenom: "inj",
      coinMinimalDenom: "inj",
      coinDecimals: 18,
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "inj",
      bech32PrefixAccPub: "injpub",
      bech32PrefixValAddr: "injvaloper",
      bech32PrefixValPub: "injvaloperpub",
      bech32PrefixConsAddr: "injvalcons",
      bech32PrefixConsPub: "injvalconspub",
    },
    currencies: [
      {
        coinDenom: "inj",
        coinMinimalDenom: "inj",
        coinDecimals: 18,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "inj",
        coinMinimalDenom: "inj",
        coinDecimals: 18,
      },
    ],
    gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.04,
    },
    features: ["eth-address-gen", "eth-key-sign"],
    beta: true,
  },
  "phoenix-1": {
    chainId: "phoenix-1",
    chainName: "Terra Mainnet",
    rpc: "https://terra-rpc.polkachu.com",
    rest: "https://terra-api.polkachu.com",
    stakeCurrency: {
      coinDenom: "LUNA",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 330,
    },
    bech32Config: {
      bech32PrefixAccAddr: "terra",
      bech32PrefixAccPub: "terrapub",
      bech32PrefixValAddr: "terravaloper",
      bech32PrefixValPub: "terravaloperpub",
      bech32PrefixConsAddr: "terravalcons",
      bech32PrefixConsPub: "terravalconspub",
    },
    currencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
      },
    ],
    coinType: 330,
    gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.04,
    },
    features: ["ibc-go"],
  },
  "pisco-1": {
    chainId: "pisco-1",
    chainName: "Terra Testnet",
    rpc: "https://terra-rpc.polkachu.com",
    rest: "https://terra-api.polkachu.com",
    stakeCurrency: {
      coinDenom: "LUNA",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 330,
    },
    bech32Config: {
      bech32PrefixAccAddr: "terra",
      bech32PrefixAccPub: "terrapub",
      bech32PrefixValAddr: "terravaloper",
      bech32PrefixValPub: "terravaloperpub",
      bech32PrefixConsAddr: "terravalcons",
      bech32PrefixConsPub: "terravalconspub",
    },
    currencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
      },
    ],
    coinType: 330,
    gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.04,
    },
    features: ["ibc-go"],
  },
  "pion-1": {
    chainId: "pion-1",
    chainName: "Neutron Testnet",
    rpc: "https://rpc.baryon.remedy.tm.p2p.org",
    rest: "https://api.baryon.remedy.tm.p2p.org",
    stakeCurrency: {
      coinDenom: "NTRN",
      coinMinimalDenom: "untrn",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "neutron",
      bech32PrefixAccPub: "neutronpub",
      bech32PrefixValAddr: "neutronvaloper",
      bech32PrefixValPub: "neutronvaloperpub",
      bech32PrefixConsAddr: "neutronvalcons",
      bech32PrefixConsPub: "neutronvalconspub",
    },
    currencies: [
      {
        coinDenom: "NTRN",
        coinMinimalDenom: "untrn",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NTRN",
        coinMinimalDenom: "untrn",
        coinDecimals: 6,
      },
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.04,
    },
  },
  "neutron-1": {
    chainId: "neutron-1",
    chainName: "Neutron Mainnet",
    rpc: "http://rpc-kralum.neutron-1.neutron.org:26657/",
    rest: "http://rest-kralum.neutron-1.neutron.org:26657/",
    stakeCurrency: {
      coinDenom: "NTRN",
      coinMinimalDenom: "untrn",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "neutron",
      bech32PrefixAccPub: "neutronpub",
      bech32PrefixValAddr: "neutronvaloper",
      bech32PrefixValPub: "neutronvaloperpub",
      bech32PrefixConsAddr: "neutronvalcons",
      bech32PrefixConsPub: "neutronvalconspub",
    },
    currencies: [
      {
        coinDenom: "NTRN",
        coinMinimalDenom: "untrn",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NTRN",
        coinMinimalDenom: "untrn",
        coinDecimals: 6,
      },
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.04,
    },
  },
};

export const frontRunningPermissions = {
  "injective-888": false,
  "phoenix-1": false,
  "pisco-1": false,
  "pion-1": false,
  "neutron-1": false,
};

export interface Denom {
  denom: string;
  decimals: number;
}

export const denoms: Record<string, Denom> = {
  "phoenix-1": { denom: "Luna", decimals: 6 },
  "pisco-1": { denom: "Luna", decimals: 6 },
  "pion-1": { denom: "NTRN", decimals: 6 },
  "neutron-1": { denom: "NTRN", decimals: 6 },
  null: { denom: "SKIP", decimals: 6 },
};

export const explorerURLs = {
  "phoenix-1": {
    tx: "https://finder.terra.money/mainnet/tx/",
    account: "https://finder.terra.money/mainnet/address/",
    height: "https://finder.terra.money/mainnet/blocks/",
  },
  "neutron-1": {
    tx: "https://www.mintscan.io/neutron/txs/",
    account: "https://www.mintscan.io/neutron/account/",
    height: "https://www.mintscan.io/neutron/blocks/",
  },
};

export const logoUrl = (chainId: string, address: string) => {
  const mapping = {
    "evmos_9001-2":
      "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/moniker/",
    "pisco-1":
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/terra/",
    "phoenix-1":
      "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/moniker/",
    "pion-1":
      "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/neutron-testnet/moniker/",
    "neutron-1":
      "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/neutron/moniker/",
  };

  // @ts-ignore
  return mapping[chainId] + address + ".png" || "";
};
