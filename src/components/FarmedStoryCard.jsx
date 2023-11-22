import React from "react";

export default function FarmedStoryCard({ img, imgAlt, name, story }) {
  const [storyInfront, setStoryInfront] = React.useState(false);

  function flipCard() {
    setStoryInfront((prev) => {
      return !prev;
    });
  }

  return (
    <div className="static mx-10 h-fit w-full">
      <div
        onClick={flipCard}
        className="group relative my-10  min-h-[250px] min-w-[150px] max-w-[400px] gap-14 md:h-[500px] md:min-w-[300px] "
      >
        <div
          className={` absolute z-10 aspect-[393/490] w-[100%] overflow-hidden rounded-xl bg-cover bg-neutral-300 shadow-xl transition-transform group-hover:-rotate-[3deg]`}
        >
          <img
            src={img}
            className="h-full w-full object-cover"
            draggable="false"
            loading="lazy"
          />
          <span className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-gradient-to-t from-skin-fadeStart to-transparent">
            <h1 className="py-5 text-5xl font-semibold text-skin-involvedcards drop-shadow-lg">
              {name}
            </h1>
          </span>
        </div>
        <div
          className={
            (storyInfront
              ? "z-20 rotate-[5deg] group-hover:rotate-[8deg] "
              : " z-0   ") +
            " absolute flex aspect-[393/490] h-[100%] w-[100%] -translate-y-5 translate-x-8  rotate-12 overflow-hidden rounded-xl bg-white bg-cover shadow-xl transition-transform group-hover:rotate-[15deg] "
          }
        >
          {story? <p className="select-none overflow-y-scroll p-2 pr-8 font-inter text-sm [-webkit-overflow-scrolling:touch] [-webkit-overflow-y:scroll] md:p-6 md:pr-12 md:text-base ">
            {story}
          </p> :
          <p className="flex items-center font-semibold select-none overflow-y-scroll p-2 pr-8 font-inter text-center text-sm [-webkit-overflow-scrolling:touch] [-webkit-overflow-y:scroll] md:p-6 md:pr-12 md:text-base ">
            My story is still being written, check back soon.
          </p>}
          <h2 className="absolute right-1 top-2 select-none text-base font-bold [text-orientation:upright] [writing-mode:vertical-rl] md:right-3 md:top-5 md:text-xl">
            My story
          </h2>
        </div>
      </div>
    </div>
  );
}
