import { cookies } from "next/headers";

export const getTokenSSR = () => {
  const token = cookies().get("PERFECTSOUND")?.value;
  if (!token || token === undefined) return null;
  return { Authorization: `Token ${token}` };
};
