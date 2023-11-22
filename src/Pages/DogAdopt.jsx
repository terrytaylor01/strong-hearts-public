import React from "react";

import { ThemeContext } from "../App";
import dogFosterImage from "../assets/dog-foster-picture.jpg";
import dogAdoptTimeline from "../assets/dog-adopt-timeline.jpg";
const AdoptCarousel = React.lazy(() => import("../components/AdoptCarousel"));

export default function DogAdopt() {
  const theme = React.useContext(ThemeContext);
  const adoptionInfoRef = React.useRef(null);

  /*   React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []); */

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
              Adopting a dog is a transformative journey. Not only do you gain a
              loyal companion, but you also become a hero. By welcoming one of
              our dogs into your home, you create room for another precious life
              to find refuge in our care. Adopt a dog today and witness the
              magic of second chances
            </p>

            <span className="flex flex-col justify-center gap-4 md:flex-row md:justify-normal [&>a]:w-fit">
              <a
                href="https://form.jotform.com/211967846466875"
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
            src={dogFosterImage}
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
          fetchQuery={"&species=Dog"}
          viewAllQuery={"?selected=Dog"}
        />

        {/* <div className="mb-12 flex flex-col items-center justify-center gap-12 font-inter lg:flex-row lg:gap-32">
          <div className="mx-8  flex aspect-[650/400] overflow-clip rounded-3xl bg-white shadow-lg md:w-[650px]">
            <img src={sampleDog} className="h-[100%] w-[40%] object-cover" />
            <div className="flex w-[60%] flex-col items-center justify-between p-2 text-skin-textprimary md:p-6 lg:gap-5">
              <h1 className="text-center text-xl font-semibold md:text-4xl">
                Puppies
              </h1>
              <h2 className="mb-0 text-sm md:mb-auto md:text-2xl">
                Dogs with so much love to give and are waiting for their chance
                to do so.
              </h2>
              <button className="text-md rounded-3xl bg-skin-footer p-2 font-semibold text-white shadow-md transition-transform hover:scale-105 md:p-3 md:text-2xl">
                View Dogs
              </button>
            </div>
          </div>
          <div className="mx-8  flex aspect-[650/400] overflow-clip rounded-3xl bg-white shadow-lg md:w-[650px]">
            <img src={longestDog} className="h-[100%] w-[40%] object-cover" />
            <div className="flex w-[60%] flex-col items-center justify-between p-2 text-skin-textprimary md:p-6 lg:gap-5">
              <h1 className="text-center text-xl font-semibold md:text-4xl">
                Longest in Care
              </h1>
              <h2 className="mb-0 text-sm md:mb-auto md:text-2xl">
                Dogs with so much love to give and are waiting for their chance
                to do so.
              </h2>
              <button className="text-md rounded-3xl bg-skin-footer p-2 font-semibold text-white shadow-md transition-transform hover:scale-105 md:p-3 md:text-2xl">
                View Dogs
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
          <h1 className="text-center text-4xl font-semibold text-skin-textprimary md:text-[4rem]">
            Adoption Information
          </h1>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl font-semibold xl:text-4xl">
            Adoption Process
          </h1>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-2 xl:text-xl">
            When it comes to selecting a dog or puppy, take your time to
            carefully think about what type of dog you are after, and what type
            of pet is right for you and your family. Please be sure to discuss
            this decision with your whole family, or whoever is sharing your
            home with you. Matching the right people to the right dog is
            important to us at Strong Hearts Dog Rescue, and this is why we have
            an adoption process.
          </p>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-2 xl:text-xl">
            Adopting and owning a dog is a wonderful experience. Dogs are such
            beautiful companions. Owning a dog is a long term responsibility -
            many dogs live until 12yo or longer! It is important to remember
            that they require a lot of care, so before applying to adopt, be
            sure that you have thoroughly thought about the responsibility of
            owning a dog.
          </p>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-2 xl:text-xl">
            We rescue all our dogs from kill-lists, so we see a whole range of
            temperaments and personalities. We rescue dog of all ages, from
            teeny tiny puppies to seniors. We describe each dog's personality in
            their Pet Rescue profiles, but feel free to ask us any further
            questions!
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">Application Form</h1>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-2 xl:text-xl">
            We require an adoption application form to be filled out. This
            includes filling out information about yourself, your household,
            your lifestyle, present and past pets, etc. One of our adoption
            co-ordinators will review each application as promptly as possible.
            If we feel your home is suitable for the particular dog you are
            enquiring about, we will call you for a phone interview to ensure
            that the best possible match has been made.
          </p>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-2 xl:text-xl">
            The application can be found{" "}
            <a
              href="https://form.jotform.com/211967846466875"
              className="underline"
              target="_blank"
            >
              here{" "}
            </a>
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">Meet and Greet</h1>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-2 xl:text-xl">
            We will then arrange a time with the dog's foster carer for a meet
            and greet. If the particular dog you are wanting to adopt may not be
            quite suitable, we will suggest some other dogs who we feel would
            suit your household.
          </p>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-2 xl:text-xl">
            All our dogs are desexed, microchipped and vaccinated. If you would
            like to adopt on the day of the meet and greet, and take the dog
            home with you, this can be discussed with your adoption
            co-ordinator.
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl font-semibold xl:text-4xl">
            Preparing for your pooch
          </h1>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-2 xl:text-xl">
            Preparation and patience are key during the adjustment period!
            Bringing a new dog into your life is an exciting event, but it’s
            also one that can be stressful for both you and your pup until
            you’ve settled into a routine. It can take days, months or longer
            for you and your pet to adjust to each other, especially if your new
            pet has lived in multiple homes or shelters in the past.
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">Food</h1>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-2 xl:text-xl">
            Ask the foster carer what food your dog has been eating, and buy a
            small bag to keep their diet consistent. You can always change food
            down the road, but you’ll want to gradually mix the current food
            with the new food to avoid upsetting their stomach.
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">
            Establish a Routine
          </h1>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-2 xl:text-xl">
            Determine your dog care regimen in advance with the human members of
            your household. Who will walk your dog and when? How often will you
            feed your dog? Will your dog be allowed on the furniture or will
            they initially need to adjust to a crate? Where will they rest at
            night? Are there any rooms in the house that are off-limits?
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">
            Prepare to house-train your dog
          </h1>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-2 xl:text-xl">
            Assume your new dog is not house-trained and work from there. Be
            consistent and maintain a routine. Bear in mind that many
            house-trained dogs might initially eliminate in your home while they
            get used to a new environment and routine; you can prevent this by
            taking them out every few hours.
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 pl-10 text-skin-textprimary sm:mt-2 sm:px-8 md:w-[80vw] xl:pl-0">
          <h1 className="text-2xl text-[2rem] xl:text-3xl">Patience is KEY!</h1>
          <p className="text-md pr-10 font-light lg:pr-0 xl:mb-2 xl:text-xl">
            Prepare the items your dog will need in advance. You’ll need a
            collar or harness, a lead, food and water bowls, a bed—and toys! We
            recommend toys that are unlikely to be swallowed. You might also
            consider an appropriately sized dog crate or enclosed pet playpen
            that’s large enough for your dog to stand up and turn around in for
            use as a safe, quiet “den.”
          </p>
        </div>
        <div className="mb-4 flex w-screen flex-col items-center justify-around gap-4 px-10 md:w-[80vw] md:flex-row [&>img]:rounded-xl [&>img]:shadow-lg">
          <img
            src={dogAdoptTimeline}
            className="aspect-square w-[100%] object-cover lg:max-w-[50%] "
            alt={
              "tabby kittens at an adoption day in their crate ready to be adopted"
            }
            loading="lazy"
          />
        </div>
      </article>
    </main>
  );
}
