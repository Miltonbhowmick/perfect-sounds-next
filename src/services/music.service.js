import axios from "axios";
import { PUBLIC_MUSIC } from "@/utils/store/endpoints";
import { buildParams } from "@/utils/utils";

export const fetchTracks = async (params = {}, token) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${PUBLIC_MUSIC}/tracks/${buildParams(params)}`, {
        params: params,
        headers: {
          ...token,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
