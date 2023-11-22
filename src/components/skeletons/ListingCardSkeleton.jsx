import React from "react";

export default function PreviewListingCardSkeleton() {
  return (
    <div className="aspect-[290/400] h-[200px] w-[145px] animate-pulse overflow-clip rounded-xl bg-white font-inter opacity-70 shadow-lg transition-transform hover:scale-105 md:h-[400px] md:w-[290px]">
      <div className=" min-h-[66%]  min-w-[100%] bg-neutral-300 p-4"></div>
      <div className="flex flex-col gap-2 p-5">
        <div className="min-h-[10px] md:min-h-[30px] min-w-[50%] rounded-lg bg-neutral-300 "></div>
        <div className="mt-auto min-h-[10px] md:min-h-[30px]  w-[40%] rounded-lg bg-neutral-300 "></div>
      </div>
    </div>
  );
}
