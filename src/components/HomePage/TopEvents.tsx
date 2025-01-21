"use client";
import React from "react";
import Link from "next/link";
import EventCard from "../shared/EventCard";
import { useGetEventsByCategoryQuery } from "@/Redux/Apis/eventApis";
import { useSearchParams } from "next/navigation";
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
}
const TopEvents = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const option = searchParams.get("option");
  const date = searchParams.get("date");
  const { data: events, isLoading } = useGetEventsByCategoryQuery({
    category: category || "",
    option: option || "",
    date: date || "",
  });
  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : !events?.data?.result ? (
        <Empty />
      ) : (
        <div className="container mx-auto">
          <h2 className="h2-black mb-5">{`Upcoming Events`}</h2>
          <div className="grid-4">
            {events?.data?.result?.map((item: EventData) => (
              <EventCard item={item} key={item?._id} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link className="button-blue" href={`/search`}>
              More
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default TopEvents;
