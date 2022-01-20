import { BASE_URL } from "../config/config";

const getProducts = async (setFunc) => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  setFunc(data);
};

const getSlots = async (setFunc) => {
  const res = await fetch(`${BASE_URL}/slots`);
  const data = await res.json();
  setFunc(data);
};

const getWalletCounter = async (setFunc) => {
  const res = await fetch(`${BASE_URL}/wallet`);
  const data = await res.json();
  setFunc(data);
};

export {
  getProducts,
  getSlots,
  getWalletCounter,
};