import React from "react";

import SloganCarousel from "../components/SloganCarousel";
import AdoptCarousel from "../components/AdoptCarousel";
import BranchesSection from "../components/BranchesSection";

import homeCollage from "../assets/home-collage.png";

import DonateSection from "../components/DonateSection";
import UpcomingEvents from "../components/UpcomingEvents";
import HeroSection from "../components/HeroSection";
import AdoptionDayBanner from "../components/AdoptionDayBanner";

export default function Home() {
  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  return (
    <main className="theme-home">
      <AdoptionDayBanner />
      <HeroSection
        heading={"Strong Hearts Sanctuary"}
        bodyText={`At Strong Hearts Sanctuary, we believe that every animal deserves
              a chance at life. Our mission is to save and rehabilitate animals
              of all shapes and kinds, providing them with any resources they
              need to thrive. We are passionate about animal advocacy and
              education, and we strive to create a world where all animals are
              treated with compassion and respect. Whether you’re looking to
              adopt, foster, volunteer, or simply learn more about our work, we
              welcome you to join us in our mission to make the world a better
              place for all those that cannot speak for themselves. Every animal
              deserves a place to call home.`}
        branches={true}
        collage={homeCollage}
        stats={{
          firstNumber: 172,
          firstTitle: "total animals in care",
          secondNumber: 1324,
          secondTitle: "total animals adopted",
        }}
      />
      {/* dividing svg */}
      <div className="w-[100vw]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 56.5L34.2 49.75C68.55 43 136.95 29.5 205.5 48.55C274.05 67.45 342.45 119.05 411 122.5C479.55 125.95 547.95 81.55 616.8 70.3C685.5 59.05 754.5 80.95 823.2 100.45C892.05 119.95 960.45 137.05 1029 145.3C1097.55 153.55 1165.95 152.95 1234.5 128.5C1303.05 104.05 1371.45 55.45 1405.8 31.3L1440 7V404.5H1405.8C1371.45 404.5 1303.05 404.5 1234.5 404.5C1165.95 404.5 1097.55 404.5 1029 404.5C960.45 404.5 892.05 404.5 823.2 404.5C754.5 404.5 685.5 404.5 616.8 404.5C547.95 404.5 479.55 404.5 411 404.5C342.45 404.5 274.05 404.5 205.5 404.5C136.95 404.5 68.55 404.5 34.2 404.5H0V56.5Z"
            fill="#3f4d3a"
          />
        </svg>
      </div>
      <div className="h-fit w-[100vw] bg-[#3f4d3a]">
        <div className="flex w-[100vw] justify-center bg-[#3f4d3a] text-skin-textsecondary">
          <span className="flex w-[100%] flex-col items-center">
            <h2 className="mb-4 mt-2 text-center font-inter text-3xl font-light tracking-tight drop-shadow-sm md:mb-24 md:text-5xl ">
              Check out our branches:
            </h2>

            <BranchesSection />
          </span>
        </div>

        <div className="w-[100vw] bg-[#3f4d3a] py-16">
          <AdoptCarousel fetchQuery={""} viewAllQuery={""} />
        </div>
      </div>
      {/* dividing svg */}
      <div className="w-[100vw]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 45L60 49.3C120 53.7 240 62.3 360 66.5C480 70.7 600 70.3 720 64.3C840 58.3 960 46.7 1080 43C1200 39.3 1320 43.7 1380 45.8L1440 48V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V45Z"
            fill="#3f4d3a"
          />
        </svg>
      </div>
      <div>
        <SloganCarousel />
      </div>
      <div className="mb-12">
        <DonateSection />
      </div>
      <div>{/* <UpcomingEvents /> */}</div>
    </main>
  );
}
