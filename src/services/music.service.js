import axios from "axios";
import { PUBLIC_MUSIC } from "@/utils/store/endpoints";
import { buildParams } from "@/utils/utils";

export const fetchTracks = async (params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${PUBLIC_MUSIC}/tracks/${buildParams(params)}`, {
        params: params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response?.data);
      });
  });
};
