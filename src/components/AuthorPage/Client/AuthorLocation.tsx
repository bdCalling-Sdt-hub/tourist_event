"use client";
import Map from "@/components/shared/Client/Map";
import { useEffect, useState } from "react";

interface Props {
  location: {
    type: string;
    coordinates: [number, number];
    _id: string;
  };
  address: string;
}

const AuthorLocation = ({ location, address }: Props) => {
  console.log({ location, address });
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (typeof window != "undefined") {
      setIsClient(true);
    }
  }, [typeof window]);
  return (
    <div className="mt-10">
      {isClient && <Map location={location} address={address} />}
    </div>
  );
};

export default AuthorLocation;
