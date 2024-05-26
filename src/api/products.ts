import { api } from ".";
import { IProduct } from "../store/store";

export function getProductsApi() {
  return api.get<IProduct[]>('/products')
}