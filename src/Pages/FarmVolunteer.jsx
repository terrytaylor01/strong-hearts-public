import React from "react";

import { ThemeContext } from "../App";
import farmVolunteer from "../assets/farm-volunteer.jpg";

import gallery1 from "../assets/farmed-volunteer-photos/farmed-volunteer-photos1.jpg";
import gallery2 from "../assets/farmed-volunteer-photos/farmed-volunteer-photos2.jpg";
import gallery3 from "../assets/farmed-volunteer-photos/farmed-volunteer-photos3.jpg";
import gallery4 from "../assets/farmed-volunteer-photos/farmed-volunteer-photos4.jpg";
import gallery5 from "../assets/farmed-volunteer-photos/farmed-volunteer-photos5.jpg";
import gallery6 from "../assets/farmed-volunteer-photos/farmed-volunteer-photos6.jpg";
import gallery7 from "../assets/farmed-volunteer-photos/farmed-volunteer-photos7.jpg";
import gallery8 from "../assets/farmed-volunteer-photos/farmed-volunteer-photos8.jpg";
import gallery9 from "../assets/farmed-volunteer-photos/farmed-volunteer-photos9.jpg";
import gallery10 from "../assets/farmed-volunteer-photos/farmed-volunteer-photos10.jpg";
import gallery11 from "../assets/farmed-volunteer-photos/farmed-volunteer-photos11.jpg";
import gallery12 from "../assets/farmed-volunteer-photos/farmed-volunteer-photos12.jpg";

import aDayPhoto1 from "../assets/adoption-day-photos/adoption-day-photos-1.jpg";
import aDayPhoto2 from "../assets/adoption-day-photos/adoption-day-photos-2.jpg";
import aDayPhoto3 from "../assets/adoption-day-photos/adoption-day-photos-3.jpg";
import aDayPhoto4 from "../assets/adoption-day-photos/adoption-day-photos-4.jpg";
import aDayPhoto5 from "../assets/adoption-day-photos/adoption-day-photos-5.jpg";
import aDayPhoto6 from "../assets/adoption-day-photos/adoption-day-photos-6.jpg";
import aDayPhoto7 from "../assets/adoption-day-photos/adoption-day-photos-7.jpg";
import aDayPhoto8 from "../assets/adoption-day-photos/adoption-day-photos-8.jpg";
import ReactImageGallery from "react-image-gallery";

const images = [
  {
    original: gallery1,
    originalAlt: "A goat being pet",
  },
  {
    original: gallery2,
    originalAlt: "A Strong Hearts member hugging a cow",
  },
  {
    original: gallery3,
    originalAlt: "A Strong Hearts member lying in the grass with a sheep",
  },
  {
    original: gallery4,
    originalAlt:
      "A volunteer feeding a donkey as the donkey's friends look over jealous",
  },
  {
    original: gallery5,
    originalAlt:
      "A strong hearts member tending to a small brown calf lying on the ground",
  },
  {
    original: gallery6,
    originalAlt: "A volunteer patting a brown donkey near it's nose",
  },
  {
    original: gallery7,
    originalAlt: "A volunteer holding a black baby lamb",
  },
  {
    original: gallery8,
    originalAlt: "A volunteer hugging a large white cow",
  },
  {
    original: gallery9,
    originalAlt: "A volunteer being kisssed by a black and white cow",
  },
  {
    original: gallery10,
    originalAlt: "Two volunteers chilling with a black cow",
  },
  {
    original: gallery11,
    originalAlt:
      "A Strong Hearts member sitting in the field with a big black cow.",
  },
  {
    original: gallery12,
    originalAlt: "A volunteer feeding baby lambs by the bottle",
  },
];

export default function FarmVolunteer() {
  const theme = React.useContext(ThemeContext);
  /* React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []); */
  return (
    <main className={theme + " flex w-screen flex-col items-center"}>
      <article className="mt-2 bg-none bg-no-repeat pb-16 font-inter bg-blend-multiply">
        <div className="mt-12 flex w-[100vw] flex-col  items-center justify-center gap-12 py-2 text-skin-textprimary md:mt-28 md:flex-row">
          <div className="mt-2 flex flex-col gap-6 pl-10 sm:mt-2 sm:w-fit sm:px-8 md:pl-28">
            <h1 className="text-3xl text-[2.5rem] xl:text-7xl">Volunteer</h1>
            <p className="max-w-[1000px] pr-10 text-base font-light lg:pr-0 xl:mb-6 xl:text-3xl">
              Step into purposeful action by volunteering at our sanctuary. As a
              registered not-for-profit charity with DGR status, your time is
              valued and we hope to give you as much as you can give us. Our
              mission is to provide a safe haven for all animals. Here, every
              pawprint matters, every snout finds solace, and every heart heals.
              Join us in nurturing these remarkable beings, and together, let’s
              sow seeds of kindness that blossom into a brighter future. It
              costs nothing to be kind or compassionate, a peaceful world begins
              when we include all in our care.
            </p>
            <span>
              <button className="rounded-full bg-skin-footer p-4 text-white shadow-md transition-transform hover:scale-105">
                Get in touch to volunteer!
              </button>
            </span>
          </div>
          <img
            src={farmVolunteer}
            className="mr-0 aspect-square max-w-[75%] rounded-2xl object-cover shadow-lg md:mr-12 md:max-w-[20%] "
            alt="Cat sitting in a cat tree"
            draggable="false"
          />
        </div>
        <div></div>
      </article>
      <article
        className={
          theme +
          " mb-12 mt-2 flex w-[100%] flex-col items-center  gap-6 bg-none bg-no-repeat pb-16 font-inter bg-blend-multiply"
        }
      >
        <div>
          <div className="mt-2 flex flex-col gap-6 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
            <h1 className="text-2xl text-[2.5rem] leading-tight xl:text-3xl">
              Embrace Compassion at Strong Hearts Farm Sanctuary!
            </h1>
            <p className="text-md pr-10 font-light lg:pr-0 xl:mb-6 xl:text-xl">
              Volunteering is a rewarding experience that involves a lot of
              compassion and perhaps a little bit of hard-work. Anyone can
              volunteer, our volunteers receive plenty of support and
              opportunities to learn. No prior experience is needed to become a
              volunteer, just a full heart and maybe some gumboots. Join us
              today!
            </p>
          </div>
        </div>
        <div className="w-full overflow-clip rounded-xl object-cover outline outline-neutral-300 md:w-[80vw] md:p-4 ">
          <ReactImageGallery
            items={images}
            useTranslate3D={false}
            slideInterval={5000}
            autoPlay={true}
            loading="lazy"
            showNav={false}
            showBullets={true}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
      </article>
    </main>
  );
}
