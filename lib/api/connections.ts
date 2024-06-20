import { API_URL } from "../../config/constants";

// fetches all the active validators for a given chain
export async function fetchActiveValidators(
  chainID: string
): Promise<string[]> {
  const response = await fetch(`${API_URL}/v1/active_validators/${chainID}`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const responseJson = await response.json();

  return responseJson.active_validators || [];
}

// fetchs all disconnected validators
export async function fetchDisconnectedValidators(
  chainID: string
): Promise<string[]> {
  const response = await fetch(
    `${API_URL}/v1/disconnected_validators/${chainID}`,
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

  return responseJson.disconnected_validators || [];
}
