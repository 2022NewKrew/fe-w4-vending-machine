import { BASE_URL } from "../config/config";

const getData = async (URL) => {
  const res = await fetch(`${BASE_URL}${URL}`);
  return await res.json();
}

export {
  getData,
}