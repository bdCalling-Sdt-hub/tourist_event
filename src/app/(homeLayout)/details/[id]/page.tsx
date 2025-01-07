import DetailsPageClient from "@/components/DetailsPage/client/DetailsPageClient";
import Spiner from "@/components/shared/Client/Spiner";
import { Suspense } from "react";

const DetailsPage: React.FC = () => {
  return (
    <Suspense fallback={<Spiner />}>
      <DetailsPageClient />
    </Suspense>
  );
};

export default DetailsPage;
