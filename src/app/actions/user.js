"use server";

import { fetchUserLatestSubscription } from "@/services/user.service";
import { getTokenSSR } from "./auth";

export async function getUserLatestSubscription() {
  const authToken = getTokenSSR();
  try {
    const responseData = await fetchUserLatestSubscription({}, authToken);
    return responseData;
  } catch (error) {
    return error;
  }
}
