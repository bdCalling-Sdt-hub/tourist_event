import Image from "next/image";
import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { EventCardProps } from "@/InterFaces/Props";
import EditButton from "./Client/EditButton";
import DeleteButton from "./Client/DeleteButton";
import { imageUrl } from "@/Utils/serverUrl";
import MoreButton from "../HomePage/Client/MoreButton";
import DuplicateButton from "./Client/DuplicateButton";

const MyEvent = ({ item }: EventCardProps) => {
  return (
    <div className="w-full h-full bg-[var(--color-white)] card-shadow rounded-md relative">
      <div className="w-full h-[300px] rounded-md overflow-hidden">
        <Image
          src={imageUrl(item?.event_image?.[0])}
          alt="image"
          height={600}
          width={600}
          className="img-cover"
          unoptimized
        />
      </div>
      <div className="p-3 relative text-gray">
        {/* <FavoriteButton
                    icon={item?.favorite ? <MdFavorite /> : <MdFavoriteBorder />}
                    favorite={item?.favorite}
                    _id={null}
                /> */}
        <span className="start-center gap-3 ">
          <FaLayerGroup />
          {item?.category?.name}
        </span>
        <p className="mt-1">{item?.name}</p>
        <hr className="w-full h-[1px] my-2" />
        <span className="start-center gap-3 ">
          <FaLocationDot className="text-[var(--color-blue-500)]" />
          {item?.address}
        </span>
      </div>
      <EditButton item={item} />
      <DuplicateButton _id={item?._id} />
      <DeleteButton _id={item?._id} />
      <MoreButton _id={item?._id} />
    </div>
  );
};

export default MyEvent;
