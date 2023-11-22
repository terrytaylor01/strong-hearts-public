import React from "react";
import { Link } from "react-router-dom";

export default function GetInvolvedCard({ link, img, title, blurb }) {
  return (
    <div className="flex max-w-[400px] flex-col gap-14">
      <Link
        to={link}
        className={
          " group relative aspect-[393/490] w-[100%] overflow-hidden rounded-xl bg-cover shadow-xl transition-all duration-300 hover:scale-105"
        }
        draggable="false"
      >
        <img src={img} className="h-full w-full object-cover" />
        <span className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-gradient-to-t from-skin-fadeStart to-transparent transition-all duration-300 group-hover:tracking-widest">
          <h1 className="py-5 text-5xl font-semibold text-skin-involvedcards drop-shadow-lg">
            {title}
          </h1>
        </span>
      </Link>
      <p>{blurb}</p>
    </div>
  );
}
