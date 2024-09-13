"use server";

import { fetchPaymentMethods } from "@/services/payment.service";
import { getTokenSSR } from "./auth";

export async function getPaymentMethodList() {
  const authToken = getTokenSSR();
  try {
    const paymentMethodList = await fetchPaymentMethods({}, authToken);
    return paymentMethodList;
  } catch (error) {
    return error;
  }
}
