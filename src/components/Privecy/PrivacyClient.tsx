"use client";

import { useGetPrivacyQuery } from "@/Redux/Apis/settingApis";

const PrivacyClient = () => {
  const { data, isLoading, isError } = useGetPrivacyQuery(undefined);

  return (
    <div className="container mx-auto mt-10">
      <div dangerouslySetInnerHTML={{ __html: data?.data?.description }} />
    </div>
  );
};

export default PrivacyClient;
