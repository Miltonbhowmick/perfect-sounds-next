import axios from "axios";
import { PUBLIC_PAYMENT } from "@/utils/store/endpoints";
import { buildParams } from "@/utils/utils";

export const fetchPricePlans = async (params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${PUBLIC_PAYMENT}/price-plans/${buildParams(params)}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const fetchSinglePricePlans = async (params = {}) => {
  return new Promise((resolve, reject) => {
    const id = params.pricePlanId;
    axios({
      method: "get",
      url: `${PUBLIC_PAYMENT}/price-plans/${id}`,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const isPromoCodeValid = async (payload = {}, token) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${PUBLIC_PAYMENT}/promo-codes/promo_validate/`,
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

export const fetchCreditPlans = async (params = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${PUBLIC_PAYMENT}/price-plan-credits`,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
