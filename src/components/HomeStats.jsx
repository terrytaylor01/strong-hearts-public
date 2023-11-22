import React from "react";
import CountUp from "react-countup";

export default function HomeStats({
  stat1,
  stat1Title,
  stat2,
  stat2Title,
  stat3,
  stat3Title,
}) {
  return (
    <div className=" flex w-[100vw] justify-center px-36 py-4 text-white drop-shadow-md md:py-16">
      <div className="flex flex-col items-center justify-center gap-6 text-left sm:w-fit sm:flex-row md:gap-16">
        <div className="h-full">
          <h1 className="text-5xl tracking-tight md:text-8xl xl:text-9xl">
            <CountUp
              start={0}
              end={stat1}
              duration={4}
              separator=""
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </h1>
          <h2 className="text-left text-base md:text-3xl xl:text-4xl">
            total animals adopted
          </h2>
        </div>
        <div className="h-full">
          <h1 className="text-5xl tracking-tight md:text-8xl xl:text-9xl">
            <CountUp
              start={0}
              end={stat2}
              duration={4}
              separator=""
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </h1>
          <h2 className="text-left text-base md:text-3xl xl:text-4xl">
            total animals in care
          </h2>
        </div>
        <div className="h-full">
          <h1 className="inline-block text-5xl tracking-tight md:text-8xl xl:text-9xl">
            <CountUp
              start={0}
              end={stat3}
              duration={4}
              separator=""
              suffix="%"
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </h1>
          <h2 className="text-left text-base md:text-3xl xl:text-4xl">
            percentage of animals we love
          </h2>
        </div>
      </div>
    </div>
  );
}
