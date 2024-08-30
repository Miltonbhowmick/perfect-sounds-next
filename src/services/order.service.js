import axios from "axios";
import { PUBLIC_ORDER } from "@/utils/store/endpoints";
import { buildParams } from "@/utils/utils";

export const fetchOrders = async (params = {}, token) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      headers: {
        ...token,
      },
      url: `${PUBLIC_ORDER}/orders/${buildParams(params)}`,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const createOrder = async (payload = {}, token) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${PUBLIC_ORDER}/orders/`,
      headers: {
        ...token,
      },
      data: payload,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
