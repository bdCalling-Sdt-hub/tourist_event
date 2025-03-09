"use client";
import { useRouter } from "next/navigation";

const useUpdateSearchParams = () => {
  const router = useRouter();

  const updateSearchParams = (key: string, value: string) => {
    if (typeof window !== "undefined") {
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.set(key, value);
      router.replace(`?${currentParams.toString()}`, { scroll: false });
    }
  };

  return updateSearchParams;
};

export default useUpdateSearchParams;
