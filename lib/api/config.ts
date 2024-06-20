import { API_URL } from "../../config/constants";

interface ValidatorConfig {
  operatorAddress: string;
  moniker: string;
  frontRunningProtection: boolean;
  paymentPercentage: number;
  paymentAddress: string;
  apiKey: string;
}

export async function fetchValidatorConfig(
  address: string,
  chainID: string
): Promise<ValidatorConfig> {
  const response = await fetch(
    `${API_URL}/v1/validator_config?signer=${address}&chain_id=${chainID}`,
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

  return {
    operatorAddress: responseJson.validator_config.OperatorAddress,
    moniker: responseJson.validator_config.Moniker,
    frontRunningProtection:
      responseJson.validator_config.FrontRunningProtection,
    paymentPercentage: responseJson.validator_config.PaymentPercentage,
    paymentAddress: responseJson.validator_config.PaymentAddress,
    apiKey: responseJson.validator_config.APIKey,
  };
}

export const setPaymentAddress = async (
  signerAddress: string,
  chainID: string,
  newAddress: string
) => {
  const response = await fetch(
    `${API_URL}/v1/payment_addr?signer=${signerAddress}&chain_id=${chainID}`,
    {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payment_addr: newAddress,
      }),
    }
  );
  const responseJson = await response.json();
  return responseJson;
};

export const setPaymentPercentage = async (
  signerAddress: string,
  chainID: string,
  percentage: string
) => {
  const response = await fetch(
    `${API_URL}/v1/payment_percentage?signer=${signerAddress}&chain_id=${chainID}`,
    {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payment_percentage: percentage,
      }),
    }
  );
  const responseJson = await response.json();
  return responseJson;
};

export const setValidatorDescription = async (
  signerAddress: string,
  chainID: string,
  description: string
) => {
  const response = await fetch(
    `${API_URL}/v1/description?signer=${signerAddress}&chain_id=${chainID}`,
    {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
      }),
    }
  );
  const responseJson = await response.json();
  return responseJson;
};
