import { axiosInstans } from "./axios-instans";
import { Ingredient } from "@/lib/generated/prisma/client";
import { ApiRoutes } from "./constans";

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInstans.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
};
