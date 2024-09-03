import axios from "axios";
import { PUBLIC_COMMON } from "@/utils/store/endpoints";

export const fetchCategories = async (params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${PUBLIC_COMMON}/categories`, {
        params: params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const fetchSubCategories = (params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${PUBLIC_COMMON}/subcategories`, {
        params: params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const fetchFavourites = (params = {}, token) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${PUBLIC_COMMON}/favourites`,
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
