import axios from "axios";
import { PUBLIC_ACCOUNT } from "@/utils/store/endpoints";
import { buildParams } from "@/utils/utils";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setProfile } from "@/store/modules/user";

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
          expires: day7,
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

export const profile = async (payload = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${PUBLIC_ACCOUNT}/users/profile`,
      headers: {
        Authorization: "Token 382110337f6a36d38fa22685fd34794e4515ac14",
      },
    })
      .then((response) => {
        // const dispatch = useDispatch();
        // dispatch(setProfile(response.data));
        resolve(response.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
