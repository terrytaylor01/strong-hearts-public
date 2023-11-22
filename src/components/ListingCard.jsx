import React from "react";

export default function ListingCard({
  id,
  name,
  photo,
  breed,
  species,
  gender,
}) {
  var theme;
  if (species == "Dog") {
    theme = "theme-dogs";
  } else if (species == "Cat") {
    theme = "theme-cats";
  } else if (species == "Rabbit") {
    theme = "theme-buns";
  } else {
    theme = "theme-farm";
  }
  return (
    <a
      key={id}
      className={
        theme +
        " aspect-[290/400] h-[200px] w-[145px] cursor-pointer overflow-clip rounded-xl bg-white font-inter shadow-lg transition-transform hover:scale-105 md:h-[400px] md:w-[290px]"
      }
      href={`../listing/${id}`}
    >
      <img
        className="h-[66%] w-[100%] object-cover italic"
        alt="Animal Profile Picture"
        loading="lazy"
        src={photo}
        draggable="false"
      />
      <div className="p-1 md:p-5">
        <h1 className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-skin-textprimary md:whitespace-normal md:text-xl">
          {name}
        </h1>
        <h2 className="mt-auto overflow-hidden text-ellipsis whitespace-normal text-xs  md:text-xl">{`${breed} ${species} - ${gender}`}</h2>
      </div>
    </a>
  );
}
