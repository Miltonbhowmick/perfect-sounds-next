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
      .catch((error) => {
        reject(error.response?.data);
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
      .catch((error) => {
        reject(error.response?.data);
      });
  });
};
