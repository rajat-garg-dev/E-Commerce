import React from "react";

export default function HomesectionCard({ data }) {
  return (
    <div className="bg-white rounded-lg h-[15rem] flex flex-col items-center shadow-lg overflow-hidden cursor-pointer mx-3">
      <div className="h-[11rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={data.image}
          alt="img"
        />
      </div>
      <div className="p-2">
        <h3 className="text-large font-medium text-gray-900">{data.brand}</h3>
        <p className="text-gray-500 text-[10px]">{data.title}</p>
      </div>
    </div>
  );
}
