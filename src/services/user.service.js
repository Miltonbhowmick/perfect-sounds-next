import axios from "axios";
import { PUBLIC_ACCOUNT } from "@/utils/store/endpoints";
import { buildParams } from "@/utils/utils";
import Cookies from "js-cookie";

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
        const day7 = 24 * 60 * 60 * 7;
        Cookies.set("PERFECTSOUND", response.data.token, {
          expires: 7,
        });
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

export const profile = async (params = {}, token) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${PUBLIC_ACCOUNT}/users/profile`,
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

export const updateUserProfile = async (payload = {}, token) => {
  return new Promise((resolve, reject) => {
    console.log(payload);
    axios({
      method: "patch",
      url: `${PUBLIC_ACCOUNT}/users/profile/`,
      headers: {
        ...token,
      },
      data: payload,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        console.log(e);
        reject(e);
      });
  });
};

export const verifyUserPassword = async (payload = {}, token) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${PUBLIC_ACCOUNT}/users/verification/`,
      headers: {
        ...token,
      },
      data: payload,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        console.log(e);
        reject(e);
      });
  });
};

export const deleteUserProfile = async (payload = {}, token) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "delete",
      url: `${PUBLIC_ACCOUNT}/users/profile/`,
      headers: {
        ...token,
      },
    })
      .then((response) => {
        Cookies.remove("PERFECTSOUND");
        resolve(response.data);
      })
      .catch((e) => {
        console.log(e);
        reject(e);
      });
  });
};
