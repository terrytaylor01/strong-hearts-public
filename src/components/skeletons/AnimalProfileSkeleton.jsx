import React from "react";

export default function AnimalProfileSkeleton() {
  return (
    <article className="mb-16 flex w-[100%] flex-col items-center drop-shadow-md lg:w-[80%] xl:w-[60%]">
      <div className="mb-20 h-16 w-[50%] animate-pulse rounded-3xl bg-neutral-300 text-6xl font-semibold opacity-70  "></div>
      <div className="flex w-[100%] flex-col items-center justify-center">
        <div className="flex min-h-screen w-[100%] flex-col items-center gap-4 rounded-2xl  bg-neutral-200 p-10">
          <div className="-mt-24 aspect-[9/10] w-[100%] animate-pulse rounded-xl bg-neutral-300 opacity-70 drop-shadow-md md:w-[65%]">
            {" "}
          </div>
        </div>
        <div className="-mt-10 flex w-[80%] flex-col items-center justify-start rounded-2xl bg-skin-profileabout px-10 py-8 text-2xl text-skin-textsecondary">
          <h2 className="mb-2  h-12 w-[100%] animate-pulse rounded-full bg-neutral-300 md:w-[30%] "></h2>
          <div className="flex w-full grid-cols-2 grid-rows-3 flex-col items-start gap-2 text-base font-semibold md:grid md:aspect-[727/250] md:items-center md:gap-0 lg:text-2xl [&>span>svg]:min-w-[30px] [&>span>svg]:max-w-[30px] [&>span>svg]:lg:w-[55px]  [&>span>svg]:lg:max-w-[55px] ">
            <h2 className="mb-2  h-12 w-[100%] animate-pulse rounded-full bg-neutral-300 md:w-[30%] "></h2>

            <h2 className="mb-2  h-12 w-[100%] animate-pulse rounded-full bg-neutral-300 md:w-[30%] "></h2>

            <h2 className="mb-2  h-12 w-[100%] animate-pulse rounded-full bg-neutral-300 md:w-[30%] "></h2>
            <h2 className="mb-2  h-12 w-[100%] animate-pulse rounded-full bg-neutral-300 md:w-[30%] "></h2>
            <h2 className="mb-2  h-12 w-[100%] animate-pulse rounded-full bg-neutral-300 md:w-[30%] "></h2>
          </div>
        </div>
      </div>
    </article>
  );
}
