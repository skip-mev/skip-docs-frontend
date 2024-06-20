import { API_URL } from "../../config/constants";

export interface ValidatorInfo {
  operatorAddress: string;
  moniker: string;
  frontRunningProtection: boolean;
  paymentPercentage: number;
  valProfit: number;
  networkProfit: number;
  chainID: string;
}

export async function fetchValidatorInfos(
  chainID: string
): Promise<ValidatorInfo[]> {
  const response = await fetch(`${API_URL}/v1/validator_info/${chainID}`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const responseJson = await response.json();

  return responseJson.validator_info.map((info: any) => ({
    operatorAddress: info.operator_address,
    moniker: info.moniker,
    frontRunningProtection: info.front_running_protection,
    paymentPercentage: info.val_payment_percentage,
    valProfit: info.val_profit,
    networkProfit: info.network_profit,
    chainID: chainID,
  }));
}
