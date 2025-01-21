"use client";
import { Carousel, Empty } from "antd";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import MoreButton from "./Client/MoreButton";
import { useGetFeaturedEventsQuery } from "@/Redux/Apis/eventApis";
import { imageUrl } from "@/Utils/serverUrl";
import Spiner from "../shared/Client/Spiner";
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
const Featured = () => {
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
                  {featured?.data?.result
                    ?.slice(0, 3)
                    ?.map((item: EventData) => (
                      <div className="w-full h-[600px]" key={item?._id}>
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
                    <Image
                      src={imageUrl(item?.event_image?.[0])}
                      className="h-20 w-20 rounded"
                      alt="featured"
                      height={300}
                      width={300}
                    />
                    <div className="p-3 text w-full">
                      <p className="mb-1">{item?.name}</p>
                      <span className="start-center gap-1 ">
                        <FaLocationDot className="text-[var(--color-blue-500)]" />
                        {item?.address}
                      </span>
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
