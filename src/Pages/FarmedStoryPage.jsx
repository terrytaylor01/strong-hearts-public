import React from "react";
import { ThemeContext } from "../App";
import FarmedStoryCard from "../components/FarmedStoryCard";

import pennyCardImg from "../assets/farmed-story-pictures/penny-story-card.jpg";
import scarlettCardImg from "../assets/farmed-story-pictures/scarlett-story-card.jpg";
import cuddlesCardImg from "../assets/farmed-story-pictures/cuddles-story-card.jpg";
import forestCardImg from "../assets/farmed-story-pictures/forest-story-card.jpg";
import homerCardImg from "../assets/farmed-story-pictures/homer-story-card.jpg";
import howieCardImg from "../assets/farmed-story-pictures/howie-story-card.jpg";

export default function FarmedStoryPage() {
  const theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  return (
    <main
      className={
        theme +
        " flex min-h-screen w-[100vw] flex-col items-center justify-center gap-24 bg-skin-bgsecondary py-12"
      }
    >
      <div className="flex w-[85%] flex-col items-center justify-center gap-12">
        <div className="flex flex-col justify-center md:py-8">
          <h1 className=" text-5xl font-medium tracking-tight text-skin-textsecondary md:text-7xl">
            Our Stories:
          </h1>
          <p className="text-center text-white opacity-50">
            Click a picture to read more
          </p>
        </div>
        <div className="grid h-fit w-[90%] place-items-center justify-center gap-16 xl:grid-cols-3 xl:grid-rows-2 ">
          <FarmedStoryCard
            img={pennyCardImg}
            imgAlt={"Penny the small white sheep in her walking harness"}
            name={"Penny"}
            story={
              "Penny is a true survivor. Despite facing numerous challenges in her life, she never gave up. After suffering from pregnancy toxaemia and a difficult birth, Penny developed nerve paralysis and pressure sores. We provided her with daily cleaning of pressure sores and physiotherapy for her hind legs. Penny had to relearn how to walk with and without a wheelchair, and she even underwent an amputation of her hind leg. Despite all of this, she never lost her spirit. Today, Penny now runs carefree through the grass with all her friends. She is a true inspiration to everyone who meets her. Her story is a testament to the resilience of animals and the power of love and dedication. We hope that Penny’s story will touch your heart and inspire you to advocate for lives just like hers."
            }
          />
          <FarmedStoryCard
            img={scarlettCardImg}
            imgAlt={
              "Scarlett, the black and white sheep, sitting in a car seat wearing a nappy."
            }
            name={"Scarlett"}
            story={
              "Scarlett’s story is one of resilience and hope. When she entered care at just 3-4 months old, she was unable to walk. Despite the odds, Scarlett refused to give up. She underwent weekly acupuncture, osteopathy, and aqua therapy, as well as four sessions of range of motion therapy every day. After eight months of rehab, she was finally able to hold herself up. And after 11 months, she could walk without wheels. She thrived for two years, being her carer’s best friend. Unfortunately, Scarlett had a hump in her spine from the break, and she got herself cast on a small hill and bloated within an hour of either side of her being seen. Her story is a testament to the power of love and compassion, and we hope it inspires you to advocate for lives like Scarlett’s."
            }
          />
          <FarmedStoryCard
            img={cuddlesCardImg}
            imgAlt={
              "Cuddles, the large black and white cow sitting next to her young son."
            }
            name={"Cuddles"}
          />

          <FarmedStoryCard
            img={howieCardImg}
            imgAlt={"Howie, a small black sheep sitting in the grass."}
            name={"Howie"}
          />
          <FarmedStoryCard
            img={forestCardImg}
            imgAlt={
              "Forrest, a brown and white calf sitting in hay with two front-leg casts."
            }
            name={"Forrest"}
          />
          <FarmedStoryCard
            img={homerCardImg}
            imgAlt={
              "Homer, a black cow looking up into the camera standing in a field with brightly-bandaged legs."
            }
            name={"Homer"}
          />
        </div>
      </div>
    </main>
  );
}
