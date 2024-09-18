"use server";

import {
  confirmPayment,
  fetchPaymentMethods,
} from "@/services/payment.service";
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

export async function postConfirmPayment(requestPayload) {
  const authToken = getTokenSSR();
  try {
    const responseData = await confirmPayment(requestPayload, authToken);
    return responseData;
  } catch (error) {
    console.log(error);
    return { error: error?.message };
  }
}
