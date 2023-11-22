import React from "react";
import { Link } from "react-router-dom";

export default function EventBanner({ cardTitle, cardLink, cardIcon }) {
  return (
    <Link
      to={cardLink}
      className="grid h-20 grid-cols-5 grid-rows-1 gap-4 transition-transform hover:scale-105 md:h-36 "
    >
      <div className="relative col-start-1 col-end-5 rounded-l-lg bg-skin-footer text-skin-adoptiontitle md:rounded-l-3xl">
        <h2 className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] whitespace-nowrap text-center text-2xl font-medium tracking-tighter text-[#c9e9be] md:text-[2.5rem] ">
          {cardTitle}
        </h2>
      </div>

      <div className="relative  col-start-5 rounded-r-3xl bg-[#c9e9be] fill-skin-profile [&>svg]:absolute [&>svg]:left-1/2 [&>svg]:top-1/2 [&>svg]:-translate-x-[50%] [&>svg]:-translate-y-[50%] [&>svg]:p-4 [&>svg]:md:p-8">
        {cardIcon}
      </div>
    </Link>
  );
}
