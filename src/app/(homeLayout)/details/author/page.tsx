import AuthorPageClient from "@/components/AuthorPage/Client/AuthorPage";
import Spiner from "@/components/shared/Client/Spiner";
import { Suspense } from "react";

const AuthorPage = () => {
  return (
    <Suspense fallback={<Spiner />}>
      <AuthorPageClient />
    </Suspense>
  );
};

export default AuthorPage;
