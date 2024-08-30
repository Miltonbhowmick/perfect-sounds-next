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
