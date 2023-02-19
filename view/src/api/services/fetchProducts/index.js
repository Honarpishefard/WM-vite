import { mainInstance } from "./../../constants";

export const fetchProducts = async (data) => {
  const info = await mainInstance.get('/products', data);
  console.log(info.data);
  return info.data;
};