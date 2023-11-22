import React from "react";

import catsLogo from "../assets/cat-rescue-logo.png";
import dogsLogo from "../assets/dog-rescue-logo.png";
import bunLogo from "../assets/bun-rescue-logo.png";
import farmLogo from "../assets/farm-rescue-logo.png";
import { Link } from "react-router-dom";

export default function BranchesSection({ preview }) {
  return (
    <div
      className={
        preview
          ? "mt-6 grid w-[85%] grid-cols-2 grid-rows-2 place-items-center items-center justify-center gap-6  md:gap-12 xl:flex "
          : "mt-6 grid w-[85%] grid-cols-2 grid-rows-2 place-items-center items-center justify-center gap-6  md:flex md:gap-12 "
      }
    >
      <BranchCard
        image={farmLogo}
        linkTo={"/farmedanimals"}
        altText={"Strong Hearts Farm Sanctuary"}
      />
      <BranchCard
        image={catsLogo}
        linkTo={"/cats"}
        altText={"Strong Hearts Cat Rescue"}
      />
      <BranchCard
        image={dogsLogo}
        linkTo={"/dogs"}
        altText={"Strong Hearts Dog Rescue"}
      />
      <BranchCard
        image={bunLogo}
        linkTo={"/buns"}
        altText={"Strong Hearts Bun Rescue"}
      />
    </div>
  );
}

function BranchCard({ image, linkTo, altText }) {
  return (
    <Link
      to={linkTo}
      className=" w-fit  rounded-3xl border-2 bg-skin-bgprimary p-2 shadow-md transition-transform hover:scale-105"
    >
      <img
        className="aspect-square w-fit object-cover md:w-64"
        src={image}
        alt={altText}
      ></img>
    </Link>
  );
}
