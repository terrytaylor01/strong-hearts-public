import React from "react";

export default function AdoptionDayInfoEntry({
  dateNumber,
  dateSuffix,
  day,
  address,
  timePeriod,
}) {
  return (
    <span className="flex w-full gap-2 text-lg lg:justify-start 2xl:pl-56 lg:items-end lg:gap-10 md:text-2xl lg:text-4xl">
      <div className="flex w-fit pr-2 lg:pr-0 ">
        <h1 className="text-6xl leading-[3rem] tracking-tighter lg:text-9xl">
          {dateNumber}
        </h1>
        <div className="flex flex-col lg:justify-end   lg:pr-12">
          <h2>{dateSuffix}</h2>
          <h2>{day}</h2>
        </div>
      </div>
      <div className="xl:max-w-[50%]  ">{address} </div>
      <div className="w-[10%] ">{timePeriod}</div>
    </span>
  );
}
