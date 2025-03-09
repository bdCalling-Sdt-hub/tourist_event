"use client";
import { Carousel, Empty } from "antd";
import Image from "next/image";
import React from "react";
import MoreButton from "./Client/MoreButton";
import { useGetFeaturedEventsQuery } from "@/Redux/Apis/eventApis";
import { imageUrl } from "@/Utils/serverUrl";
import Spiner from "../shared/Client/Spiner";
import { useRouter } from "next/navigation";
import moment from "moment";
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
const Featured = () => {
  const router = useRouter();
  const { data: featured, isLoading } = useGetFeaturedEventsQuery(undefined);
  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="container mx-auto">
          <h2 className="h2-black mb-5">Featured</h2>
          {featured?.data?.result?.length <= 0 ? (
            <Empty />
          ) : (
            <div className="md:grid grid-cols-3 gap-16">
              <div className="col-span-2">
                <Carousel autoplay autoplaySpeed={2000}>
                  {featured?.data?.result?.map((item: EventData) => (
                    <div
                      onClick={() => router.push(`/details/${item?._id}`)}
                      className="w-full h-[600px] cursor-pointer"
                      key={item?._id}
                    >
                      <Image
                        src={imageUrl(item?.event_image?.[0])}
                        height={1800}
                        width={2000}
                        className="img-cover"
                        alt="featured"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="start-start gap-2 flex-col w-full h-[600px] overflow-y-scroll">
                {featured?.data?.result?.map((item: EventData) => (
                  <div
                    className="start-start p-2 gap-2 bg-[var(--color-blue-200)] rounded-md w-full relative"
                    key={item?.name}
                  >
                    <div className="h-28 w-32 center-center flex-col">
                      <Image
                        src={imageUrl(item?.event_image?.[0])}
                        className=" rounded w-full h-full object-contain"
                        alt="featured"
                        height={400}
                        width={400}
                      />
                    </div>
                    <div className="p-3 text w-full">
                      <p className="text-base font-bold">{item?.name}</p>
                      <p className="text-base">
                        {item?.vendor?.business_name || "unknown business"}
                      </p>
                      <p
                        className={`text-white text-xs  ${
                          item?.date &&
                          new Date(item?.date)
                            ?.toISOString()
                            ?.split("T")?.[0] ==
                            new Date()?.toISOString()?.split("T")?.[0]
                            ? "bg-red-600"
                            : "bg-red-400"
                        } rounded-md w-fit p-1`}
                      >
                        {item?.date &&
                        new Date(item?.date)?.toISOString()?.split("T")?.[0] ==
                          new Date()?.toISOString()?.split("T")?.[0]
                          ? "Today"
                          : moment(item?.date).format("MMMM Do")}
                      </p>
                      {/* <span className="start-center gap-1 ">
                        <FaLocationDot className="text-[var(--color-blue-500)]" />
                        {item?.address?.slice(0, 45)}...
                      </span> */}
                      <MoreButton _id={item?._id} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Featured;
