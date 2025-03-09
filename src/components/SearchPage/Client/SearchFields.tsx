"use client";
import useUpdateSearchParams from "@/Utils/SetParams";
import { Input } from "antd";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchFields = () => {
  const updateSearchParams = useUpdateSearchParams();
  return (
    <Input
      onChange={(e) => updateSearchParams("search", e.target.value)}
      style={{ height: 50 }}
      placeholder="Search Event Here..."
      prefix={<FaSearch />}
    />
  );
};

export default SearchFields;
