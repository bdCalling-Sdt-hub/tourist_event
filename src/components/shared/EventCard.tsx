import Image from "next/image";
import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { EventCardProps } from "@/InterFaces/Props";
import MoreButton from "../HomePage/Client/MoreButton";
import { imageUrl } from "@/Utils/serverUrl";
import moment from "moment";

const EventCard = ({ item }: EventCardProps) => {
  // console.log({
  //   name: item?.name,
  //   test: dayjs(item?.date).toDate().toISOString()?.split("T")?.[0],
  //   test2: new Date()?.toISOString()?.split("T")?.[0],
  // });
  // console.log(dayjs(item?.date).toDate().toISOString());
  return (
    <div className="w-full h-full bg-[var(--color-white)] card-shadow rounded-md relative">
      <div className="w-full h-[300px] rounded-md overflow-hidden relative">
        <span
          className={`text-white ${
            new Date(item?.date)?.toISOString()?.split("T")?.[0] ==
            new Date()?.toISOString()?.split("T")?.[0]
              ? "bg-red-600"
              : "bg-red-400"
          } p-2 py-1 absolute z-30 right-1 top-1 rounded-md`}
        >
          {new Date(item?.date)?.toISOString()?.split("T")?.[0] ==
          new Date()?.toISOString()?.split("T")?.[0]
            ? "Today"
            : new Date(item?.date)?.toISOString()?.split("T")?.[0]}
        </span>
        <Image
          src={imageUrl(item?.event_image?.[0])}
          alt="image"
          height={600}
          width={600}
          className="img-cover"
        />
        <div className="p-3 text-white absolute top-[50%] translate-y-[-50%] bg-black w-full h-full flex justify-center items-start flex-col bg-opacity-60">
          {/* <FavoriteButton
                    icon={item?.favorite ? <MdFavorite /> : <MdFavoriteBorder />}
                    favorite={item?.favorite}
                    _id={null}
                /> */}
          <span className="start-center text-lg gap-3">
            <FaLayerGroup />
            {item?.category?.name}
          </span>

          <p className="mt-1 text-3xl font-semibold my-2">{item?.name}</p>
          <span className="start-center gap-3 text-base font-bold">
            {item?.vendor?.business_name}
          </span>
          {/* <hr className="w-full h-[1px] my-2" />
          <span className="start-start gap-3 ">
            <FaLocationDot className="text-white" />
            {item?.address}
          </span> */}
        </div>
      </div>
      <MoreButton _id={item?._id} />
      {/* <div className='w-full h-full bg-black absolute'>
            </div> */}
    </div>
  );
};

export default EventCard;
