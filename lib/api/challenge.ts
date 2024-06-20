import { API_URL } from "../../config/constants";

export const fetchChallenge = async (address: string, chain: string) => {
  const response = await fetch(
    `${API_URL}/v1/challenge?signer=${address}&chain_id=${chain}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const responseJson = await response.json();
  return responseJson;
};

export const postChallenge = async (
  address: string,
  chain: string,
  signature: string,
  publicKey: string,
  sigType: string
) => {
  const response = await fetch(
    `${API_URL}/v1/challenge?signer=${address}&chain_id=${chain}&sig_type=${sigType}`,
    {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signer: address,
        signed_challenge: signature,
        pubkey: publicKey,
      }),
    }
  );
  const responseJson = await response.json();
  return responseJson;
};
