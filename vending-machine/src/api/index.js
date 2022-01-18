import { BASE_URL } from "../config/config";

const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return await res.json();
}

const getSlots = async () => {
  const res = await fetch(`${BASE_URL}/slots`);
  return await res.json();
}

export {
  getProducts,
  getSlots,
}