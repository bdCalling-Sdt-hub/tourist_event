import { imageUrl } from "@/Utils/serverUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendar, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaEarthAfrica, FaLocationDot } from "react-icons/fa6";
interface Props {
  location: string;
  name: string;
  event_image: string;
  date: string;
  time: string;
  end_date: string;
  social_media: {
    name: string;
    link: string;
    _id: string;
  }[];
}
const Banner = ({
  location,
  date,
  end_date,
  event_image,
  name,
  time,
  social_media,
}: Props) => {
  return (
    <div className="h-[400px] relative md:h-[600px] w-full rounded-md overflow-hidden mt-5">
      <Image
        src={imageUrl(event_image)}
        alt="banner"
        height={600}
        width={1200}
        unoptimized
        className="img-cover"
      />
      <div
        style={{
          display: "none",
        }}
        className="absolute top-[50%] translate-y-[-50%] md:left-8 left-4 pr-4 md:pr-0 start-start flex-col gap-1 max-w-[600px]"
      >
        {/* <p className='text-[var(--color-white)] text-lg md:text-xl lg:text-2xl'>Best Event in</p> */}
        <p className="h1-white">{name}</p>
        <p
          style={{
            color: "var(--color-white)",
          }}
          className="text flex justify-start items-center gap-2"
        >
          <FaLocationDot /> {location}
        </p>
        <p className="start-center bg-[var(--color-blue-500)] text-[var(--color-white)] w-fit p-1 px-4 mt-2 rounded-md gap-2">
          <FaCalendar /> {date?.split("T")?.[0]} at {time} to{" "}
          {end_date?.split("T")?.[0]}
        </p>
        <div className="flex justify-start items-center gap-2 mt-2 text-white">
          {social_media ? (
            Array.isArray(social_media) ? (
              social_media?.map((item) => (
                <Link href={item?.link}>
                  {item?.name == "facebook" ? (
                    <FaFacebook />
                  ) : item?.name == "website" ? (
                    <FaEarthAfrica />
                  ) : item?.name == "instagram" ? (
                    <FaInstagram />
                  ) : (
                    <FaTiktok />
                  )}
                </Link>
              ))
            ) : (
              <Link href={social_media}>
                <FaEarthAfrica />
              </Link>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
