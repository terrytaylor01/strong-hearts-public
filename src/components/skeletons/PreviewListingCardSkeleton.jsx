import React from "react";

export default function PreviewListingCardSkeleton() {
  return (
    <div className="aspect-[290/400] w-[290px] animate-pulse overflow-clip rounded-xl bg-white font-inter opacity-70 shadow-lg transition-transform hover:scale-105">
      <div className=" min-h-[66%]  min-w-[100%] bg-neutral-300 p-4"></div>
      <div className="flex flex-col gap-2 p-5">
        <div className="min-h-[20px] min-w-[40px] rounded-lg bg-neutral-300 "></div>
        <div className="mt-auto min-h-[20px] w-[40%] rounded-lg bg-neutral-300 "></div>
      </div>
    </div>
  );
}
