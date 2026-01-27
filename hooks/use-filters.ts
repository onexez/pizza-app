import { useRouter, useSearchParams } from "next/navigation";
import { useFilterIngredients } from "./use-filter-ingredients";
import { useSet } from "react-use";
import React from "react";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export const useFilters = () => {
  const router = useRouter();

  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients(
    searchParams.get("ingredients")?.split(","),
  );

  const [sizes, { toggle: toogleSizes }] = useSet(
    new Set<string>(searchParams.get("sizes") ? searchParams.get("sizes")?.split(",") : []),
  );

  const [pizzaTypes, { toggle: tooglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.get("pizzaTypes") ? searchParams.get("pizzaTypes")?.split(",") : [],
    ),
  );

  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });
};
