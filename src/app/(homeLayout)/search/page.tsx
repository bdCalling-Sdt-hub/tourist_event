"use client";
import SearchPageClient from "@/components/SearchPage/Client/SearchPageClient";
import { Suspense } from "react";

const SearchPage = () => {
  return (
    <Suspense fallback={``}>
      <SearchPageClient />
    </Suspense>
  );
};

export default SearchPage;
