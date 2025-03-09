"use client";
import { FavoriteButtonProps } from "@/InterFaces/Props";
const FavoriteButton = ({ icon, _id, favorite }: FavoriteButtonProps) => {
  return (
    <button
      onClick={() => console.log({ _id, favorite })}
      style={{
        fontSize: 24,
      }}
      className="text-gray absolute top-3 right-3"
    >
      {icon ? icon : "button icon is missing"}
    </button>
  );
};

export default FavoriteButton;
