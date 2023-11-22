import React from "react";
import CountUp from "react-countup";

export default function HeroStats({ stat1, stat1Title, stat2, stat2Title }) {
  return (
    <div className="flex gap-16 sm:w-fit">
      <div>
        <h1 className="text-6xl font-light tracking-tighter md:text-8xl xl:text-9xl">
          <CountUp start={0} end={stat1} duration={3} delay={0} />
        </h1>
        <h2 className="text-xl opacity-70 md:text-3xl xl:text-4xl">
          {stat1Title}
        </h2>
      </div>
      <div>
        <h1 className="text-6xl font-light tracking-tighter md:text-8xl xl:text-9xl">
          <CountUp start={0} end={stat2} duration={4} delay={0} />
        </h1>
        <h2 className="text-xl opacity-70 md:text-3xl xl:text-4xl">
          {stat2Title}
        </h2>
      </div>
    </div>
  );
}
