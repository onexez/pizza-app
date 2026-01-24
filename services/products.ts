import { axiosInstans } from "./axios-instans";
import { Product } from "@/lib/generated/prisma/client";
import { ApiRoutes } from "./constans";

export const search = async (query: string): Promise<Product[]> => {
  return (await axiosInstans.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } })).data;
};
