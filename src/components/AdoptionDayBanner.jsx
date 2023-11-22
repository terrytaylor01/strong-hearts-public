import React from "react";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";

export default function AdoptionDayBanner({message}) {
  const theme = React.useContext(ThemeContext)
  if (!message) {
    message = <><p>ADOPTION DAY SATURDAY! <Link to={"/adoptiondays"} className="underline">LEARN MORE</Link></p></>
    
  }
  return (
    <div className={theme + " inline-flex w-screen flex-nowrap whitespace-nowrap bg-skin-footer py-2  font-inter text-white"}>
      <ul className="  animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        <li>
          <div className="text-3xl font-semibold tracking-tighter">
            {message}
          </div>
        </li>
        <li>
          <div className="text-3xl font-semibold tracking-tighter">
            {message}
          </div>
        </li>
        <li>
          <div className="text-3xl font-semibold tracking-tighter">
            {message}
          </div>
        </li>
        <li>
          <div className="text-3xl font-semibold tracking-tighter">
            {message}
          </div>
        </li>
        <li>
          <div className="text-3xl font-semibold tracking-tighter">
            {message}
          </div>
        </li>
        <li>
          <div className="text-3xl font-semibold tracking-tighter">
          {message}
          </div>
        </li>
      </ul>
      <ul className="  animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8" aria-hidden="true">
        <li>
          <div className="text-3xl font-semibold tracking-tighter">
            {message}
          </div>
        </li>
        <li>
          <div className="text-3xl font-semibold tracking-tighter">
            {message}
          </div>
        </li>
        <li>
          <div className="text-3xl font-semibold tracking-tighter">
            {message}
          </div>
        </li>
        <li>
          <div className="text-3xl font-semibold tracking-tighter">
            {message}
          </div>
        </li>
        <li>
          <div className="text-3xl font-semibold tracking-tighter">
            {message}
          </div>
        </li>
        <li>
          <div className="text-3xl font-semibold tracking-tighter">
            {message}
          </div>
        </li>
      </ul>
    </div>
  );
}
