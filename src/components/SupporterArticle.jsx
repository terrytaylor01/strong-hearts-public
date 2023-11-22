import React from "react";

export default function SupporterArticle({ companyTitle, body, img, imgAlt }) {
  return (
    <article className="mt-12 flex w-full flex-col  items-center justify-center gap-12 py-2 text-skin-textprimary md:mt-28 md:flex-row">
      <div className="mt-2 flex  flex-col gap-6 pl-10 sm:mt-2 sm:w-fit sm:px-8 md:pl-28">
        <h1 className="text-3xl  xl:text-5xl">{companyTitle}</h1>
        <p className=" pr-10 text-sm w-full font-light lg:pr-0 xl:mb-6 xl:text-2xl flex flex-col gap-4">
          {body}
        </p>
      </div>
      <img
        src={img}
        className="mr-0 aspect-square min-w-[290px] max-w-[75%] rounded-2xl object-cover shadow-lg md:mr-12 md:max-w-[20%] "
        alt={imgAlt}
        draggable="false"
      />
    </article>
  );
}
