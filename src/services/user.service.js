import axios from "axios";
import { PUBLIC_ACCOUNT } from "@/utils/store/endpoints";
import { buildParams } from "@/utils/utils";

export const signup = async (payload = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${PUBLIC_ACCOUNT}/users/signup/`,
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

export const signin = async (payload = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${PUBLIC_ACCOUNT}/users/signin/`,
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

export const sendVerificationCode = async (payload = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${PUBLIC_ACCOUNT}/users/send_verification_code/`,
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

export const verifyCode = async (payload = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${PUBLIC_ACCOUNT}/users/verify_code/`,
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
