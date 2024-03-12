import React from "react";
import "./ProductCard.css";
export default function ProductCard({ data }) {
  return (
    <div className="ProductCard  transition-all w-[15rem] cursor-pointer m-3">
      <div className="h-[20rem] object-cover">
        <img
          className="object-cover object-top w-full h-full"
          src={data.imageUrl}
          alt="img"
        />
      </div>
      <div className="textPart p-2 bg-white">
        {" "}
        <div>
          <p className="font-bold opacity-60">{data.brand}</p>
          <p className="text-gray-500 ">{data.title}</p>
        </div>
        <div className="flex-row flex items-center space-x-2">
          <p className="font-semibold">₹{data.discountedPrice}</p>
          <p className="opacity-50 line-through">₹{data.price}</p>
          <p className="text-green-500 font-semibold">
            {data.discountPersent}%
          </p>
        </div>
      </div>
    </div>
  );
}
