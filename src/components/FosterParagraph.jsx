import React from "react";

export default function FosterParagraph({ heading, body, iconSvg }) {
  return (
    <div className="mt-2 flex flex-col gap-2  px-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:px-0 [&>div]:mb-2 [&>div]:h-12 [&>div]:text-center">
      <div className="flex items-center gap-2 [&>svg]:aspect-square [&>svg]:w-20 fill-skin-socials">
        {iconSvg}
        <h1 className="text-xl xl:text-3xl">{heading}</h1>
      </div>
      <p className="text-base whitespace-pre-line font-light lg:pr-0 xl:mb-6 xl:text-xl">
        {body}
      </p>
    </div>
  );
}
