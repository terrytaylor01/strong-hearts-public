import React from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../App";
import catAdoptImage from "../assets/cat-adopt-page-main.jpg";
const AdoptCarousel = React.lazy(() => import("../components/AdoptCarousel"));

export default function CatAdopt() {
  const theme = React.useContext(ThemeContext);
  const adoptionInfoRef = React.useRef(null);

  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  function scrollTo() {
    adoptionInfoRef.current.scrollIntoView();
  }

  return (
    <main className={theme + " w-screen"}>
      <article className="mt-2 bg-none bg-no-repeat pb-10 font-inter bg-blend-multiply">
        <div className="mt-12 flex w-[100vw] flex-col  items-center justify-center gap-12 py-2 text-skin-textprimary md:mt-28 md:flex-row">
          <div className="mt-2 flex flex-col gap-6 pl-10 sm:mt-2 sm:w-fit sm:px-8 md:pl-28">
            <h1 className="text-3xl text-[2.5rem] xl:text-7xl">Adopting</h1>
            <p className="max-w-[1000px] pr-10 text-base font-light lg:pr-0 xl:mb-6 xl:text-3xl">
              Adopting a cat is a life-changing experience that not only brings
              joy and companionship but also saves a life. By adopting one of
              our cats you create space for another kill-listed life to come
              into our care. Adopt a cat today and make a difference in both
              your lives!
            </p>

            <span className="flex flex-col justify-center gap-4 md:flex-row md:justify-normal [&>a]:w-fit">
              <a
                href="https://form.jotform.com/213521591519859"
                target="_blank"
                className="rounded-full bg-skin-footer p-4 text-white shadow-md transition-transform hover:scale-105"
              >
                Apply to Adopt
              </a>
              <button
                onClick={scrollTo}
                className="w-fit rounded-full bg-skin-footer p-4 text-white shadow-md transition-transform hover:scale-105"
              >
                General Adopt Information
              </button>
            </span>
          </div>
          <img
            src={catAdoptImage}
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
          fetchQuery={"&species=Cat"}
          viewAllQuery={"?selected=Cat"}
        />

        {/* <div className="mb-12 flex flex-col items-center justify-center gap-12 font-inter lg:flex-row lg:gap-32">
          <div className="mx-8  flex aspect-[650/400] overflow-hidden rounded-3xl bg-white shadow-lg md:w-[650px]">
            <img
              src={seniorPicture}
              className="h-[100%] w-[40%] object-cover"
            />
            <div className="flex w-[60%] flex-col items-center justify-between p-2 text-skin-textprimary md:p-6 lg:gap-5">
              <h1 className="text-center text-xl font-semibold md:text-4xl">
                Seniors
              </h1>
              <h2 className="mb-0 text-sm md:mb-auto md:text-2xl">
                Seniors with so much love to give and are waiting for their
                chance to do so.
              </h2>
              <button className="text-md rounded-3xl bg-skin-footer p-2 font-semibold text-white shadow-md transition-transform hover:scale-105 md:p-3 md:text-2xl">
                View Cats
              </button>
            </div>
          </div>
          <div className="mx-8  flex aspect-[650/400] overflow-hidden rounded-3xl bg-white shadow-lg md:w-[650px]">
            <img
              src={kittenPicture}
              className="h-[100%] w-[40%] object-cover"
            />
            <div className="flex w-[60%] flex-col items-center justify-between p-2 text-skin-textprimary md:p-6 lg:gap-5">
              <h1 className="text-center text-xl font-semibold md:text-4xl">
                Kittens
              </h1>
              <h2 className="mb-0 text-sm md:mb-auto md:text-2xl">
                Cats with so much love to give and are waiting for their chance
                to do so.
              </h2>
              <button className="text-md rounded-3xl bg-skin-footer p-2 font-semibold text-white shadow-md transition-transform hover:scale-105 md:p-3 md:text-2xl">
                View Cats
              </button>
            </div>
          </div>
        </div> */}
      </div>
      <div ref={adoptionInfoRef} className="w-[100vw]">
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
        className={
          theme +
          " mb-12 mt-2 flex w-[100%] flex-col items-center gap-6 bg-none bg-no-repeat pb-16 pt-16 font-inter bg-blend-multiply"
        }
      >
        <div>
          <h1 className="px-10 text-center text-4xl font-semibold text-skin-textprimary md:text-6xl">
            Adoption Information
          </h1>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">
            Finding the perfect match
          </h1>
          <p className="text-md whitespace-pre-line pr-10 font-light lg:pr-0 xl:mb-6  xl:text-xl ">
            {`When it comes to selecting a cat or kitten, take your time to carefully think about what type of cat you are after, and what type of pet is right for you and your household. Please be sure to discuss this decision with your whole household. 

            Adopting and owning a cat is a wonderful experience. It is also extra special to adopt a cat or kitten from Strong Hearts Cat Rescue as we specialise in the rescue of kill-listed animals who are facing certain euthanasia if they aren't rescued by us. You really are giving a cat or kitten a second chance at life!
            Cats are such beautiful companions. Owning a cat is a long-term responsibility - many cats live until 20 years old, or longer!

            It is important to remember that while cats are fairly low-maintenance, they do require proper care throughout their entire life. So before applying to adopt, be sure you have really thought through what this may entail and whether you are prepared for the responsibility of owning a cat.
            
            At Strong Hearts, we see a whole range of temperaments and personalities in our cats. We rescue cats of all ages, from teeny tiny kittens to seniors. We describe each cat's personality in their Pet Rescue profiles, but feel free to ask us any further questions!
            `}
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">
            Applying for a cat or kitten
          </h1>
          <p className="text-md whitespace-pre-line pr-10 font-light lg:pr-0 xl:mb-6 xl:text-xl">
            {`The second step of the process is to complete an adoption application form. This includes filling out information about: yourself, your household, your lifestyle as well as past or present pets.
            
            Our adoption co-ordinators review every application that comes through as promptly as possible. If we feel your household is suitable for the particular cat or kitten that you are enquiring about, we will call you for a phone interview to ensure that the best possible match has been made. If we believe the cat or kitten you've enquired about isn't going to be the best fit for your household, we will give you a call to discuss some other cats or kittens that may be better suited.
            
            Please remember that all of our team members are volunteers and it may take a couple of days for us to get back to you on the status of your application.
            `}
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">Meet & Greets</h1>
          <p className="text-md whitespace-pre-line pr-10 font-light lg:pr-0 xl:mb-6 xl:text-xl">
            {`The third and final step before officially adopting a cat is a Meet & Greet. It is a Strong Heart policy to arrange a Meet & Greet with the prospective family and the cat or kitten before finalising the adoption. The adoption co-ordinator for the cat or kitten you've expressed interest in will arrange a time with the cat's foster carer for the Meet & Greet. The Meet & Greet will be hosted at the foster carers house. 
            
            On the day, you will visit the foster carers home. Don’t worry, they are lovely – we promise! They will let you have a pat and a play with the cat or kitten. The foster carer will tell you a bit about the cats personality and what they have been like for the time they’ve been in their care.
            
            We encourage prospective parents to spend some time around the cat (around about half an hour) and see if the vibe works. Chat to the foster carer about what the cat has been eating when staying with them, what kind of food they like, if they has a preferred litter, favourite toys etc. Basically, any question you have about the cat, ask away! If there’s a question they can’t answer, feel free to follow up with your adoption co-ordinator.
            If you would like to adopt on the day of the Meet & Greet, and take the cat or kitten home with you, this can be discussed with your adoption coordinator.
            
            Please note, that to be eligible for adoption it is a Strong Hearts requirement that cats and kittens are desexed and microchipped.
            `}
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">
            Strong Hearts Cat Rescue Adoption Policies
          </h1>
          <p className="text-md whitespace-pre-line pr-10 font-light lg:pr-0 xl:mb-6 xl:text-xl">
            {`Adoption requirements and policies can be found within the organisation's policies page `}
            <Link to="/policies" className="underline">
              here
            </Link>
          </p>
          <Link></Link>
        </div>
      </article>
    </main>
  );
}
