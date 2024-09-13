"use server";

import { fetchUserLatestSubscription } from "@/services/user.service";
import { getTokenSSR } from "./auth";

export async function getUserLatestSubscription() {
  const authToken = getTokenSSR();
  try {
    const data = await fetchUserLatestSubscription({}, authToken);
    return data;
  } catch (error) {
    return error;
  }
}
