import React from "react";

import { ThemeContext } from "../App";

export default function FosterPageBody({
  mainBlurb,
  applicationLink,
  onboardingLink,
  mainImage,
  mainImageAlt,
  infoBody,
  bottomImages,
}) {
  const vetListRef = React.useRef();

  const theme = React.useContext(ThemeContext);
  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  function scrollTo() {
    vetListRef.current.scrollIntoView();
  }

  return (
    <main className={theme + " flex w-screen flex-col items-center"}>
      <article className="mt-2 bg-none bg-no-repeat font-inter bg-blend-multiply md:pb-16">
        <div className="mt-12 flex w-[100vw] flex-col  items-center justify-center gap-12 py-2 text-skin-textprimary md:mt-28 md:flex-row">
          <div className="mt-2 flex flex-col gap-6 pl-10 sm:mt-2 sm:w-fit sm:px-8 md:pl-28">
            <h1 className="text-3xl text-[2.5rem] xl:text-7xl">Fostering</h1>
            <p className="max-w-[1000px] pr-10 text-base font-light lg:pr-0 xl:mb-6 xl:text-3xl">
              {mainBlurb}
            </p>
            <span className="flex flex-col justify-center gap-4 md:flex-row md:justify-normal [&>a]:w-fit">
              <a
                href={applicationLink}
                target="_blank"
                className="rounded-full bg-skin-footer p-4 text-white shadow-md transition-transform hover:scale-105"
              >
                Apply to be a foster!
              </a>
              {onboardingLink ? <a
                href={onboardingLink}
                target="_blank"
                className="rounded-full bg-skin-footer p-4 text-white shadow-md transition-transform hover:scale-105"
              >
                Foster On-boarding Document
              </a> : ""}
            </span>
          </div>
          <img
            src={mainImage}
            className="mr-0 aspect-square max-w-[100%] rounded-2xl object-cover text-center italic shadow-lg md:mr-12 md:max-w-[20%] "
            alt={mainImageAlt}
            draggable="false"
          />
        </div>
        <div></div>
      </article>
      <article
        className={
          theme +
          " mb-12 mt-12 flex w-[100%] flex-col items-center gap-2 bg-none bg-no-repeat font-inter bg-blend-multiply"
        }
      >
        <h1 className="px-10 pb-10 text-center text-4xl font-semibold text-skin-textprimary md:text-6xl">
          {" "}
          Foster Information
        </h1>

        {infoBody}
      </article>
      <div className="mb-12 flex w-screen flex-col items-center justify-around gap-4 px-10 md:w-[80vw] md:flex-row [&>img]:rounded-xl [&>img]:shadow-lg">
        <img
          src={bottomImages.first}
          className="aspect-square w-[100%] object-cover md:max-w-[33%]"
          alt={bottomImages.firstAlt}
          loading="lazy"
        />

        <img
          src={bottomImages.second}
          alt={bottomImages.secondAlt}
          className="aspect-square w-[100%] object-cover md:max-w-[33%]"
          loading="lazy"
        />
        <img
          src={bottomImages.third}
          alt={bottomImages.thirdAlt}
          className="aspect-square w-[100%] object-cover md:max-w-[33%]"
          loading="lazy"
        />
      </div>
    </main>
  );
}
