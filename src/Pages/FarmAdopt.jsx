import React from "react";

import { ThemeContext } from "../App";
const AdoptCarousel = React.lazy(() => import("../components/AdoptCarousel"));
import sampleCard from "../assets/sample-farm-adopt-card.jpg";
import AnimalSpeciesAdoptCard from "../components/AnimalSpeciesAdoptCard";

import cattleCard from "../assets/farmed-adopt-card-pictures/cattle-card.jpg";
import goatCard from "../assets/farmed-adopt-card-pictures/goat-card.jpg";
import horseCard from "../assets/farmed-adopt-card-pictures/horse-card.jpg";
import pigCard from "../assets/farmed-adopt-card-pictures/pig-card.jpg";
import roosterCard from "../assets/farmed-adopt-card-pictures/rooster-card.jpg";
import sheepCard from "../assets/farmed-adopt-card-pictures/sheep-card.jpg";

export default function FarmAdopt() {
  const theme = React.useContext(ThemeContext);
  const adoptionInfoRef = React.useRef(null);
  const adoptionCardsRef = React.useRef(null);

  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  function scrollTo(ref) {
    ref.current.scrollIntoView();
  }

  return (
    <main className={theme + " w-screen"}>
      <article className="mt-2 bg-none bg-no-repeat pb-10 font-inter bg-blend-multiply">
        <div className="mt-12 flex w-[100vw] flex-col  items-center justify-center gap-12 py-2 text-skin-textprimary md:mt-28 md:flex-row">
          <div className="mt-2 flex flex-col gap-6 pl-10 sm:mt-2 sm:w-fit sm:px-8 md:pl-28">
            <h1 className="text-3xl text-[2.5rem] xl:text-7xl">
              Adopting
            </h1>
            <p className="max-w-[1000px] pr-10 text-base font-light lg:pr-0 xl:mb-6 xl:text-3xl">
              Open your heart to a world of joy unlike any other - adopt a
              farmed animal today! Our sanctuary is home to many beautiful,
              loving farmed animals who are waiting to become a part of your
              life. By adopting, you’re not just giving an animal a safe and
              happy home, but also supporting our mission to rescue and protect
              these wonderful creatures. Each adoption story is a beacon of hope
              that shines light on the compassionate choices we can all make.
              Adopt, and let their gratitude and friendship fill your life with unconditional
              love and profound joy.
            </p>
            <span className="flex flex-col gap-2 md:flex-row md:gap-8">
              <button
                onClick={() => scrollTo(adoptionCardsRef)}
                className="w-fit rounded-full bg-skin-footer p-2 text-white shadow-md transition-transform hover:scale-105 md:p-4"
              >
                Apply to Adopt
              </button>{" "}
              <button
                onClick={() => scrollTo(adoptionInfoRef)}
                className="w-fit rounded-full bg-skin-footer p-2 text-white shadow-md transition-transform hover:scale-105 md:p-4"
              >
                View Adoption Information
              </button>
            </span>
          </div>
          <img
            src={sampleCard}
            className="mr-0 aspect-square min-w-[290px] max-w-[75%] rounded-2xl object-cover shadow-lg md:mr-12 md:max-w-[20%] "
            alt="Cat sitting in a cat tree"
            draggable="false"
          />
        </div>
      </article>
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
            fill="#0F0F0F"
            className="fill-skin-divider"
          />
        </svg>
      </div>
      <div className="bg-skin-bgsecondary pb-10">
        <AdoptCarousel
          fetchQuery={"&exclude_species=Cat,Dog,Rabbit"}
          viewAllQuery={"?selected=farmed"}
        />
      </div>
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
            fill="#0F0F0F"
            className="fill-skin-divider"
          />
        </svg>
      </div>

      <article
        ref={adoptionCardsRef}
        className={
          theme +
          " mb-12 mt-2 flex w-[100%] scroll-m-32 flex-col items-center gap-6 bg-none bg-no-repeat pb-16 pt-16 font-inter bg-blend-multiply"
        }
      >
        <div className="lg:gap-22 mb-12 flex flex-col items-center justify-center gap-12 font-inter lg:flex-row lg:flex-wrap">
          <AnimalSpeciesAdoptCard
            title={"Cattle Adoption"}
            description={
              "Complete the form below to apply to adopt one of our cows, calfs or bulls"
            }
            imgSrc={cattleCard}
            formLink={"https://form.jotform.com/212934582448867"}
          />
          <AnimalSpeciesAdoptCard
            title={"Sheep Adoption"}
            description={
              "Complete the form below to apply to adopt one of our gorgeous lambs or sheep"
            }
            imgSrc={sheepCard}
            formLink={"https://form.jotform.com/212934092144856"}
          />
          <AnimalSpeciesAdoptCard
            title={"Horse Adoption"}
            description={
              "Complete the form below to apply to adopt one of our handsome horses or ponies"
            }
            imgSrc={horseCard}
            formLink={"https://form.jotform.com/212935094928869"}
          />
          <AnimalSpeciesAdoptCard
            title={"Hen Adoption"}
            description={
              "Complete the form below to apply to adopt one (or more) of our beautiful hens"
            }
            imgSrc={sampleCard}
            formLink={"https://form.jotform.com/210357508342047"}
          />
          <AnimalSpeciesAdoptCard
            title={"Rooster Adoption"}
            description={
              "Complete the form below to apply to adopt one of our handsome roos"
            }
            imgSrc={roosterCard}
            formLink={"https://form.jotform.com/212934518081859"}
          />
          <AnimalSpeciesAdoptCard
            title={"Goat Adoption"}
            description={
              "Complete the form below to apply to adopt one of our awesome goats"
            }
            imgSrc={goatCard}
            formLink={"https://form.jotform.com/210727054570855"}
          />
          <AnimalSpeciesAdoptCard
            title={"Pig Adoption"}
            description={
              "Complete the form below to apply to adopt one of our adorable pigs"
            }
            imgSrc={pigCard}
            formLink={"https://form.jotform.com/220290217520847"}
          />
          <AnimalSpeciesAdoptCard
            title={"Bird Adoption"}
            description={
              "Complete the form below to apply to adopt one of our beautiful birds"
            }
            imgSrc={sampleCard}
          />
        </div>
        <div>
          <h1
            ref={adoptionInfoRef}
            className="scroll-m-32 text-center text-4xl font-semibold text-skin-textprimary md:text-[4rem]"
          >
            Adoption Information
          </h1>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">
            Adopting lorem ipsum
          </h1>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-6 xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">
            Adopting lorem ipsum
          </h1>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-6 xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">
            Adopting lorem ipsum
          </h1>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-6 xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">
            Adopting lorem ipsum
          </h1>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-6 xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </article>
    </main>
  );
}
