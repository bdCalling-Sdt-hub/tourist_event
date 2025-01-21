"use client";
import { useGetCategoryQuery } from "@/Redux/Apis/categoryApis";
import useUpdateSearchParams from "@/Utils/SetParams";
import { Popover } from "antd";
import React, { useMemo } from "react";
import { FaFilter } from "react-icons/fa";
import { CategoryType } from "../JoinUsPage/Client/VendorRequest";
import { useSearchParams } from "next/navigation";

const TodaysEvent = () => {
  const updateSearchParams = useUpdateSearchParams();
  const searchParams = useSearchParams();
  const SelectedCategory = searchParams.get('cat')
  const option = searchParams.get('option')
  const { data: category, isLoading } = useGetCategoryQuery(undefined);
  const Options = useMemo(() => {
    if (!category?.data || !Array.isArray(category?.data)) {
      console.warn("Category data is not an array or is undefined.");
      return [{ label: "All Event", value: "" }];
    }

    const categoryOption = category.data.map((item: CategoryType) => ({
      label: item.name,
      value: item._id,
    }));

    return [{ label: "All Event", value: "" }, ...categoryOption];
  }, [category?.data]);

  const Options2 = [
    { name: "Family Friendly", value: "Family Friendly" },
    { name: "Free", value: "Free" },
    { name: "All", value: "" },
  ];

  const content = useMemo(() => {
    return (
      <div className="bg-blue-900 p-2 rounded-sm flex flex-col gap-1">
        {Options.map((item: any) => (
          <button
            onClick={() => {
              updateSearchParams("category", item.value)
              updateSearchParams("cat", item.label)
            }}
            className="hover:bg-[var(--color-blue-500)] p-1 rounded-sm"
            key={item.value}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }, [Options, updateSearchParams]);

  const content2 = (
    <div className="bg-blue-900 p-2 rounded-sm flex flex-col gap-1">
      {Options2.map((item) => (
        <button
          onClick={() => updateSearchParams("option", item.value)}
          className="hover:bg-[var(--color-blue-500)] p-1 rounded-sm"
          key={item.value}
        >
          {item.name}
        </button>
      ))}
    </div>
  );

  return (
    <div className="bg-blue-900 px-2 md:py-6 py-4 mt-5 w-full">
      <div className="between-center gap-2 container mx-auto">
        <p className="h2-white">Today's EVENT IN Costa Rica</p>
        <div className="end-center gap-2">
          <Popover placement="bottom" title="" content={content}>
            <button className="button-blue whitespace-nowrap">
              <FaFilter /> {SelectedCategory || 'All Event'}
            </button>
          </Popover>
          <Popover placement="bottom" title="" content={content2}>
            <button className="button-blue whitespace-nowrap">
              <FaFilter /> {option || 'Tags'}
            </button>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default TodaysEvent;
