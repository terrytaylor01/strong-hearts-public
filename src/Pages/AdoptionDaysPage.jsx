import React from "react";
import adoptionDayPhoto from "../assets/adoption-day-photos/adoption-day-photo.jpg";
import AdoptionDayInfoEntry from "../components/AdoptionDayInfoEntry";

import aDayPhoto1 from "../assets/adoption-day-photos/adoption-day-photos-1.jpg";
import aDayPhoto2 from "../assets/adoption-day-photos/adoption-day-photos-2.jpg";
import aDayPhoto3 from "../assets/adoption-day-photos/adoption-day-photos-3.jpg";
import aDayPhoto4 from "../assets/adoption-day-photos/adoption-day-photos-4.jpg";
import aDayPhoto5 from "../assets/adoption-day-photos/adoption-day-photos-5.jpg";
import aDayPhoto6 from "../assets/adoption-day-photos/adoption-day-photos-6.jpg";
import aDayPhoto7 from "../assets/adoption-day-photos/adoption-day-photos-7.jpg";
import aDayPhoto8 from "../assets/adoption-day-photos/adoption-day-photos-8.jpg";

import christmasLights from "../assets/adoption-day-photos/christmas-lights.png";
import AdoptionDayBanner from "../components/AdoptionDayBanner";
import { ThemeContext } from "../App";

export default function AdoptionDaysPage() {
  const theme = React.useContext(ThemeContext)
  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);
  return (
    <main className={theme +" flex w-screen flex-col text-skin-textprimary items-center"}>
      <span>
        <AdoptionDayBanner message={
          "ADOPT, DON'T SHOP 🐶🐱🐰"
        } />
      </span>
      <article className="mt-2 flex justify-center bg-none bg-no-repeat pb-10 font-inter bg-blend-multiply md:pb-16">
        <div className="mt-12 flex w-[85%] flex-col  items-center justify-center gap-12 py-2 text-skin-textprimary md:mt-28 md:flex-row">
          <div className="mt-2 flex flex-col gap-6 sm:mt-2 sm:w-fit sm:px-8 md:pl-28">
            <h1 className="text-3xl text-[2.5rem] xl:text-7xl">
              Adoption Days
            </h1>
            <p className="max-w-[1000px] pr-10 text-base font-light md:text-xl lg:pr-0 xl:mb-6">
              Join us on our heartwarming adoption days, where tails wag,
              whiskers twitch, and bunnies hop into your heart. Whether you’re a
              cat lover, a dog enthusiast, or simply an animal admirer, our pet
              store rendezvous is the purrfect opportunity to meet your future
              furry companion. It’s easy, it’s fun, and it might just lead to a
              lifelong friendship. Come, share cuddles, and find your forever
              friend!
            </p>
          </div>
          <img
            src={adoptionDayPhoto}
            className="mr-0 aspect-square max-w-[100%] rounded-2xl object-cover text-center italic shadow-lg md:mr-12 md:max-w-[20%] "
            alt={"A black cat with one eye sitting on a orange towel with a bowtie on."}
            draggable="false"
          />
        </div>
        <div></div>
      </article>
      <article className="font-regular flex-col px-8 pb-24 text-3xl lg:w-[75%] lg:px-0">
        <h1 className="lg:pb-18  text-left">Upcoming adoption days:</h1>
        <h1 className="lg:pb-18 text-xl opacity-50 pb-12 text-left">(Keep an eye on our socials for updates and changes)</h1>
        <div className="pb-12">
          <h2 className="pb-6 font-light opacity-50 lg:text-5xl">November</h2>
          <div className="flex flex-col gap-10 font-light md:gap-24 lg:pl-4">
            <AdoptionDayInfoEntry
              dateNumber={11}
              dateSuffix={"th"}
              day={"Sat"}
              address={"PetBarn Preston, Unit 2/86 Bell St, Preston VIC 3072"}
              timePeriod={"10am to 3pm"}
            />
            <AdoptionDayInfoEntry
              dateNumber={19}
              dateSuffix={"th"}
              day={"Sun"}
              address={
                "PetBarn Camberwell, 305 Camberwell Rd, Camberwell VIC 3124"
              }
              timePeriod={"10am to 3pm"}
            />
            <AdoptionDayInfoEntry
              dateNumber={25}
              dateSuffix={"th"}
              day={"Sat"}
              address={"PetStock Hawthorn, 550 Burwood Rd, Hawthorn VIC 3122"}
              timePeriod={"10am to 3pm"}
            />
          </div>
        </div>
        <div>
          <span className="flex items-center pb-6 lg:gap-14">
            <h2 className="font-light opacity-50 lg:text-5xl">December</h2>{" "}
            <img className="h-12 object-cover lg:h-24" src={christmasLights} />
          </span>
          <div className="flex flex-col  gap-10 font-light  md:gap-24 lg:pl-4">
            <AdoptionDayInfoEntry
              dateNumber={"02"}
              dateSuffix={"nd"}
              day={"Sat"}
              address={"Petbarn Chadstone, Capon St, Malvern East VIC 3148"}
              timePeriod={"10am to 3pm"}
            />
            <AdoptionDayInfoEntry
              dateNumber={"09"}
              dateSuffix={"th"}
              day={"Sat"}
              address={"Petbarn Richmond, 609 Church St, Richmond VIC 3121"}
              timePeriod={"10am to 3pm"}
            />
            <AdoptionDayInfoEntry
              dateNumber={"16"}
              dateSuffix={"th"}
              day={"Sat"}
              address={
                "Petstock Brighton East, 895 Nepean Hwy, Bentleigh VIC 3204"
              }
              timePeriod={"10am to 3pm"}
            />
          </div>
        </div>
      </article>
      <div className="mb-12 flex w-screen flex-col items-center justify-around gap-4 px-10 md:w-[80vw] md:flex-row [&>img]:rounded-xl [&>img]:shadow-lg">
        <img
          src={aDayPhoto1}
          className="aspect-square w-[100%] object-cover md:max-w-[25%]"
          alt={
            "tabby kittens at an adoption day in their crate ready to be adopted"
          }
        />

        <img
          src={aDayPhoto2}
          alt={
            "an adoption day setup featuring a table with a cat in a crate, goodiebbags and welcome banners"
          }
          className="aspect-square w-[100%] object-cover md:max-w-[25%]"
        />
        <img
          src={aDayPhoto3}
          alt={
            "adoption day banner being put up by helpful PetStock Brighton East staff"
          }
          className="aspect-square w-[100%] object-cover md:max-w-[25%]"
        />

        <img
          src={aDayPhoto4}
          alt={
            "an adoption day setup featuring a table with a cat in a crate, goodiebbags and welcome banners"
          }
          className="aspect-square w-[100%] object-cover md:max-w-[33%]"
        />
      </div>
      <div className="mb-12 flex w-screen flex-col items-center justify-around gap-4 px-10 md:w-[80vw] md:flex-row [&>img]:rounded-xl [&>img]:shadow-lg">
        <img
          src={aDayPhoto5}
          className="aspect-square w-[100%] object-cover md:max-w-[25%]"
          alt={
            "tabby kittens at an adoption day in their crate ready to be adopted"
          }
        />

        <img
          src={aDayPhoto6}
          alt={
            "an adoption day setup featuring a table with a cat in a crate, goodiebbags and welcome banners"
          }
          className="aspect-square w-[100%] object-cover md:max-w-[25%]"
        />
        <img
          src={aDayPhoto7}
          alt={
            "adoption day banner being put up by helpful PetStock Brighton East staff"
          }
          className="aspect-square w-[100%] object-cover md:max-w-[25%]"
        />

        <img
          src={aDayPhoto8}
          alt={
            "an adoption day setup featuring a table with a cat in a crate, goodiebbags and welcome banners"
          }
          className="aspect-square w-[100%] object-cover md:max-w-[33%]"
        />
      </div>
    </main>
  );
}
