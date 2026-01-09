"use client";

import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultValues?: string[];
  defaultItems: Item[];
  limit?: number;
  searchPlaceholder?: string;
  onChange?: (values: string[]) => void;
  className?: string;
}

export const CheckboxFilterGroup: React.FC<Props> = ({
  title,
  items,
  defaultValues,
  defaultItems,
  limit = 5,
  searchPlaceholder = "Поиск...",
  onChange,
  className,
}) => {
  const [showAll, setShowAll] = React.useState(false);

  const list = showAll ? items : defaultItems?.slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input placeholder={searchPlaceholder} className="bg-gray-50 border-none" />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            onCheckedChange={(asd) => console.log(asd)}
            checked={false}
            key={index}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>
    </div>
  );
};
