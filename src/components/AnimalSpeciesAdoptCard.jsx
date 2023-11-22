import React from "react";

export default function AnimalSpeciesAdoptCard({
  title,
  description,
  imgSrc,
  formLink,
}) {
  return (
    <div className="mx-8  flex aspect-[650/400] overflow-hidden rounded-3xl bg-white shadow-lg md:w-[650px]">
      <img src={imgSrc} className="h-full w-[40%] object-cover" />
      <div className="flex w-[60%] flex-col items-center justify-between p-2 text-skin-textprimary md:p-6 lg:gap-5">
        <h1 className="text-center text-xl font-semibold md:text-4xl">
          {title}
        </h1>
        <h2 className="mb-0 text-sm tracking-tight md:mb-auto md:text-2xl">
          {description}
        </h2>
        <a
          href={formLink}
          target="_blank"
          className="text-md rounded-3xl bg-skin-footer p-2 font-semibold tracking-tight text-white shadow-md transition-transform hover:scale-105 md:p-3 md:text-2xl"
        >
          Adoption Form
        </a>
      </div>
    </div>
  );
}
