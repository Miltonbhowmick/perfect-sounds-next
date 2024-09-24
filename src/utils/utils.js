import Cookies from "js-cookie";

export const buildParams = (params) => {
  const keys = Object.keys(params);
  if (keys.length == 0) return "";
  return (
    "?" +
    keys
      .map((key) => {
        if (params[key] != null) {
          return `${key}=${params[key]}`;
        }
      })
      .join("&")
  );
};
