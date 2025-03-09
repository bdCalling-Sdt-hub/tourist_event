import FaqClientPage from "@/components/Faq/FaqClientPage";
import { Suspense } from "react";

const FaqPages = () => {
  return (
    <Suspense fallback={``}>
      <FaqClientPage />
    </Suspense>
  );
};

export default FaqPages;
