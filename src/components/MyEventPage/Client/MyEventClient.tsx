"use client";
import AddEventButton from "@/components/MyEventPage/Client/AddEventButton";
import { useGetVendorEventQuery } from "@/Redux/Apis/eventApis";
import { Pagination } from "antd";
import React, { useState } from "react";
import MyEvent from "@/components/MyEventPage/MyEvent";
import { EventData } from "@/components/HomePage/PopularEvents";

const MyEventClient = () => {
  const [page, setPage] = useState(1);
  const { data: vendorData } = useGetVendorEventQuery({ page });
  return (
    <div className="container mx-auto mt-6">
      <div className="between-center">
        <h2 className="h2-black mb-5">My Event</h2>
        <AddEventButton />
      </div>
      <div className="grid-3">
        {vendorData?.data?.result?.map((item: EventData) => (
          <MyEvent item={item} key={item?._id} />
        ))}
      </div>
      <div className="mt-3">
        <Pagination
          pageSize={vendorData?.data?.meta?.limit || 10}
          total={vendorData?.data?.meta?.total || 0}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
};

export default MyEventClient;
