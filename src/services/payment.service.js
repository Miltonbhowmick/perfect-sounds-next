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
        // console.log(e)
        reject(e);
      });
  });
};
