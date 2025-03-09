"use client";
import React from "react";
import EventCard from "../shared/EventCard";
import { useGetEventsByCategoryQuery } from "@/Redux/Apis/eventApis";
import Spiner from "../shared/Client/Spiner";
import { Empty } from "antd";
export interface EventData {
  category: {
    name: string;
    _id: string;
  };
  date: string;
  event_image: string[];
  name: string;
  _id: string;
  address: string;
  vendor: {
    business_name: string;
  };
}
const PopularEvents = () => {
  const { data: events, isLoading } = useGetEventsByCategoryQuery({
    category: "677ba67ac2771b3198bcbf2c",
  });
  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="container mx-auto">
          <h2 className="h2-black mb-5">Promotions</h2>
          {events?.data?.result?.length <= 0 ? (
            <Empty />
          ) : (
            <div className="grid-4">
              {events?.data?.result?.map((item: EventData) => (
                <EventCard item={item} key={item?._id} />
              ))}
            </div>
          )}

          {/* <Link href={'/'} className='button-blue whitespace-nowrap mx-auto mt-6'>
                View All
            </Link> */}
        </div>
      )}
    </>
  );
};

export default PopularEvents;
