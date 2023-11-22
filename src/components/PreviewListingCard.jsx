import React from "react";

export default function PreviewListingCard({
  id,
  name,
  photo,
  breed,
  species,
  gender,
}) {
  return (
    <a
      key={id}
      className="aspect-[290/400] w-[290px]  cursor-pointer overflow-clip rounded-xl bg-white font-inter shadow-lg transition-transform hover:scale-105"
      href={`../listing/${id}`}
      draggable="false"
    >
      <img
        className="h-[66%] w-[100%] bg-neutral-200 bg-opacity-70 object-cover text-center italic text-black"
        alt="Animal Profile Picture"
        loading="lazy"
        src={photo}
        draggable="false"
      />
      <div className="p-5">
        <h1 className="text-xl font-semibold text-skin-textprimary">{name}</h1>
        <h2 className="mt-auto text-xl">{`${breed} ${species} - ${gender}`}</h2>
      </div>
    </a>
  );
}
