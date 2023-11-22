import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

import "../gallery.css";

import gallery1 from "../assets/farmed-gallery-pictures/gallery.jpg";
import gallery2 from "../assets/farmed-gallery-pictures/gallery2.jpg";
import gallery3 from "../assets/farmed-gallery-pictures/gallery3.jpg";
import gallery4 from "../assets/farmed-gallery-pictures/gallery4.jpg";
import gallery5 from "../assets/farmed-gallery-pictures/gallery5.jpg";
import gallery6 from "../assets/farmed-gallery-pictures/gallery6.jpg";
import gallery7 from "../assets/farmed-gallery-pictures/gallery7.jpg";

export default function SloganCarousel() {
  const images = [
    {
      original: gallery1,
      originalAlt:
        "A downed camel with a leg cast being assisted by a doctor and a farm sanctuary member",
    },
    {
      original: gallery2,
      originalAlt:
        "An infant sheep with its eyes closed with a catheter drip going into its bandaged arm",
    },
    {
      original: gallery3,
      originalAlt:
        "A fluffy black and white cow lying in hay with it's head being held by farm sanctuary member",
    },
    {
      original: gallery4,
      originalAlt:
        "An brown cow lying on a operation table looking at the camera.",
    },
    {
      original: gallery5,
      originalAlt:
        "A large cow lying in hay with a IV tubes coming from behind it's head",
    },
    {
      original: gallery6,
      originalAlt:
        "A sheep who's eye has been recovered and has an injured face laying in the hay",
    },
    {
      original: gallery7,
      originalAlt: "A brown a white goat being looked at, at a vet",
    },
  ];

  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <article className="flex w-screen grid-cols-2 flex-col items-center px-10 py-8 md:grid  md:gap-12 xl:w-[85%]">
        <div className="w-full overflow-clip rounded-xl  ">
          <ImageGallery
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

        {/* Slogan Section */}
        <div className="flex flex-row  gap-4">
          <h1 className="h-fit text-center font-inter text-3xl font-normal leading-normal  text-skin-slogantext md:text-left md:text-5xl lg:max-w-[70%] lg:text-7xl lg:leading-tight 2xl:text-9xl ">
            INVOKE <strong>CHANGE, </strong> SHOW <strong>COMPASSION</strong>
          </h1>
        </div>
      </article>
      <div className="   px-8 py-8  font-inter text-base  text-skin-textslogan md:text-left  md:text-lg lg:w-[85%]">
        <p>
          Farmed animals are some of the most resilient and deserving creatures
          on the planet. Despite the hardships they face each day.They continue
          to fight for their lives and their freedom but can't do it alone. At
          Strong Hearts, each animal has their own unique story of survival and
          resilience. Some have been rescued from neglect, while others have
          been saved from the meat trade. Despite their past, they all share one
          thing in common: they have been given a second chance at life.{" "}
          <Link to={"/farmedanimals/stories"} className="underline">
            View our stories here.{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}
