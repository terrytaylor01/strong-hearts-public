import React from "react";
import { ThemeContext } from "../App";

import ae from "../assets/donate-merchant/american-express.png";
import visa from "../assets/donate-merchant/visa.png";
import mastercard from "../assets/donate-merchant/mastercard.png";
import paypal from "../assets/donate-merchant/paypal.png";
import discover from "../assets/donate-merchant/discover.png";

import sampleDonateCard from "../assets/cat-donate.jpg";

import catLitterCard from "../assets/donate-price-photos/cat-litter.jpg";
import catNippleCard from "../assets/donate-price-photos/cat-nipple.jpg";
import catWormCard from "../assets/donate-price-photos/cat-worm.jpg";
import catDesexCard from "../assets/donate-price-photos/cat-desex.jpg";
import catDesexCard2 from "../assets/donate-price-photos/cat-female-desex.jpg";

import dogDesexCard from "../assets/donate-price-photos/dog-desex.jpg";
import dogFoodCard from "../assets/donate-price-photos/dog-food.jpg";
import sheepRoutineCard from "../assets/donate-price-photos/sheep-routine.jpg";
import sheepHospitalCard from "../assets/donate-price-photos/sheep-hospital.jpg";

import pineapplesPhoto from "../assets/donate-price-photos/pineapples.jpg";
import ranchPhoto from "../assets/donate-price-photos/ranch.jpg";
import unoPhoto from "../assets/donate-price-photos/uno.jpg";
import moPhoto from "../assets/donate-price-photos/mo.jpg";
import ivyPhoto from "../assets/donate-price-photos/ivy.jpg";
import gerryPhoto from "../assets/donate-price-photos/gerry.jpg";

export default function DonatePage() {
  const theme = React.useContext(ThemeContext);

  /* React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []); */

  return (
    <main
      className={
        theme +
        " flex  min-h-screen w-screen flex-col items-center p-6 font-inter text-skin-textprimary xl:p-0"
      }
    >
      <article className="flex w-full flex-col items-center gap-12 pt-6 md:pt-24 lg:max-w-[60%]">
        <div className="flex flex-col gap-2">
          <h1 className="w-full text-4xl xl:text-7xl">Donations save lives</h1>
          <p className="text-base md:text-lg">
            Every day, innocent animals are put on the kill list. Strong Hearts
            is dedicated to saving the lives of these cats, dogs, bunnies , and
            rehabilitating farmed animals. We are a registered non-profit
            organization, and our rescue is entirely volunteer-run. Every dollar
            you donate goes directly to saving animals in need. Your
            contribution can make a significant difference in the lives of these
            animals. Join us in our mission to give these animals a second
            chance at life
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-4 rounded-2xl outline-neutral-300  md:gap-2 md:px-8 md:pt-8 md:outline xl:w-[80%]">
          <span className="-mb-1 text-center text-xs opacity-70 md:text-base">
            We are a registered charity, and all donations $2 and over are tax
            deductible.
          </span>
          <button className="flex w-full rounded-3xl bg-skin-footer py-4 text-skin-textsecondary shadow-lg transition-transform hover:scale-105">
            <h1 className="w-full text-center text-5xl font-semibold md:text-7xl">
              DONATE
            </h1>
          </button>
          <div className="flex min-h-[30px] gap-3">
            <img src={visa} alt="Visa Merchant" />
            <img src={mastercard} alt="Mastercard Merchant" />
            <img src={paypal} alt="Paypal Merchant" />
            <img src={ae} alt="American Express Merchant" />
            <img src={discover} alt="Discover Merchant" />
          </div>
          <span className="py-2 text-center text-sm font-light md:py-12 md:text-base">
            Direct Debit: Strong Hearts Farm Sanctuary BSB: 633 000 ACC:
            180405532
          </span>
        </div>
      </article>
      <article className="flex w-full flex-col items-center gap-6  pt-20 md:gap-10 md:pt-24 xl:max-w-[60%]">
        <h1 className="w-full text-2xl xl:text-5xl">
          Here’s what your donation can do
        </h1>
        <div className=" grid  grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 sm:grid-rows-3 ">
          <DonatePriceCard
            img={catNippleCard}
            alt={"a black neonate kitten suckling from a bottle"}
            desc={
              "will get us a Miracle Nipple for bottle feeding a neonatal kitten, small puppy or rabbit."
            }
            price={"$20"}
          />
          <DonatePriceCard
            img={catLitterCard}
            alt={"a calico cat peering out from a box of cat litter"}
            desc={
              "will get us a bag of cat litter that will last one cat a month."
            }
            price={"$40"}
          />
          <DonatePriceCard
            img={catWormCard}
            alt={"a kitten holding a box of flea, tick and worm medication"}
            desc={
              "will provide flea, heartworm and worm treatment to three dogs or cats or rabbits."
            }
            price={"$50"}
          />
          <DonatePriceCard
            img={dogFoodCard}
            alt={"a black and brown dog sitting with bags of food behind them"}
            desc={
              "will get us a bag of dog food that will last one dog nearly two months."
            }
            price={"$60"}
          />
          <DonatePriceCard
            img={sheepRoutineCard}
            alt={"a black and brown sheep"}
            desc={
              "will cover the routine care, including shearing, vaccinating, lice treatment and worming of 5 sheep  "
            }
            price={"$100"}
          />
          <DonatePriceCard
            img={catDesexCard}
            alt={"a big black male cat at the vet getting ready for desexing"}
            desc={"will castrate, vaccinate and microchip one male cat."}
            price={"$175"}
          />
          <DonatePriceCard
            img={catDesexCard2}
            alt={"two kittens cuddling in their surgery suits after desexing"}
            desc={"will desex, vaccinate and microchip one female cat."}
            price={"$240"}
          />
          <DonatePriceCard
            img={dogDesexCard}
            alt={"a large black mother dog with her 15 sunkling baby puppies"}
            desc={"will desex, vaccinate and microchip one dog."}
            price={"$500"}
          />
          <DonatePriceCard
            img={sheepHospitalCard}
            alt={"a brown and white cow laying on a operating table"}
            desc={
              "will cover the costs of an overnight stay at an emergency hospital."
            }
            price={"$1000"}
          />
        </div>
      </article>
      <article className="flex w-full flex-col items-center gap-6  py-12 pt-20 md:gap-10 md:pt-24 xl:max-w-[60%]">
        <h1 className="w-full text-2xl xl:text-5xl">
          Here's what your donations have done
        </h1>
        <div className="flex flex-col gap-12">
          <DonateStory
            body={
              <>
                <p>
                  Pineapples was an orphan who was bottle raised around the
                  clock since she was two days old, she had a rectal prolapse
                  when she was 4 weeks old which resolved with surgery and now
                  that she has had her spay procedure and is finally ready for
                  the payoff, her new life with her forever home, if she was the
                  next emergency for us we couldn’t have done the treatment or
                  diagnostics we did for her today and that is really scary, all
                  because of the timing of so very many emergencies at once
                  Pineapples was an orphan who was bottle raised around the
                  clock since she was two days old, she had a rectal prolapse
                  when she was 4 weeks old which resolved with surgery and now
                  that she has had her spay procedure and is finally ready for
                  the payoff, her new life with her forever home, if she was the
                  next emergency for us we couldn’t have done the treatment or
                  diagnostics we did for her today and that is really scary.
                  <br /> <br />
                  Baby Pineapples ended up spending 2 days in emergency after
                  she begun having grand mal seizures. Vet assessed and
                  suspected liver shunt. She ended up diagnosed with liver shunt
                  as well as toxoplasmosis. Thankfully Pineapples is in the mend
                  and has been recovering ever since. Overall Pineapple's
                  emergency cost was over $3000.
                </p>
              </>
            }
            title={"Pineapples"}
            img={pineapplesPhoto}
            isImgLeft={true}
          />
          <DonateStory
            body={
              <>
                <p>
                  A beautiful mama and her 4 little three week old babies
                  entered our care. Mama dog was light in condition but her
                  bouncy babies were healthy, except that Ranch had a genetic
                  spinal deformity which needed exploration. Ranch had x rays on
                  his spine when he arrived, and we were given instruction to
                  take him home and allow him to grow for 6 weeks before
                  returning to repeat those x rays and form a treatment plan
                  once his body had grown. Three were diagnosed in their forever
                  homes with deadly parvovirus. Our hearts sank and we
                  immediately covered the expense to hospitalise each of the
                  adopted babies, and soon after, Ranch who was still home with
                  us begun to show symptoms too. After days and weeks in
                  hospital and receiving updates that took us through highs and
                  lows, despite early treatment and following medical science to
                  the very end with every treatment available, we devastatingly
                  lost Caesar, Dijon and our baby boy Ranch. <br></br> <br />
                  After 2 weeks in hospital fighting for her life, only Tzaziki
                  made it home to her family. We treat so much parvo at NSW vet
                  clinics for puppies who come down with parvo in pounds and it
                  often costs us $1500-4500 to treat and so few of those cases
                  don’t survive treatment, we were so unprepared for the
                  devastation that losing 3 of our 4 babies with state of the
                  art care brought upon our team, and left two families who were
                  expecting a lifetime together heartbroken beyond words. At a
                  cost of $50,000 we threw the book at their treatment, willing
                  them to overcome, and though we are so relieved for Tzaziki
                  and her family
                </p>
              </>
            }
            title={"Ranch's Family"}
            img={ranchPhoto}
            isImgLeft={false}
          />
          <DonateStory
            body={
              <>
                <p>
                  Poor Uno survived the dreaded panleukopenia that took two of
                  his siblings away in front is his eyes, but his hardships were
                  not over yet. We finally thought we were out of the woods with
                  him and his brother, but mere hours after desexing surgery he
                  was in emergency again. His foster carer noticed he was not
                  playful and bright like his brother, and he was limp and
                  struggling to breathe. We rushed him straight to emergency,
                  and he was diagnosed with aspiration pneumonia (fluid in his
                  lungs). We agreed to ultrasound and xray examination, as well
                  as admitting him to hospital for the night. He spent all night
                  and all day in an oxygen cage to help his little lunge to
                  breathe. <br></br>
                  <br /> We had already put so much love into this boy, it would
                  not be fair to stop now. To our joy he had improved greatly
                  overnight, allowing him to be discharged where he could be
                  monitored by one of our wonderful vet nurse volunteers
                  overnight. He is now eating and bright - quickly he was back
                  to his normal cheeky self. We are so grateful that we were
                  able to give him the best standard of care, but his vet bill
                  came to a whopping $4000.
                </p>
              </>
            }
            img={unoPhoto}
            title={"Uno"}
            isImgLeft={true}
          />
          <DonateStory
            body={
              <>
                <p>
                  Mo and his buddy Steve were abandoned when their humans moved
                  house! The new property owners realised Mo needed veterinary
                  care and contacted us to help. Mo was diagnosed with Avascular
                  Femoral Head Necrosis, a condition where the head of his femur
                  had an localised infection from a possible trauma causing the
                  bone to disintegrate over time. Mo had been dragging his leg
                  for so long that his muscles had wasted completely and there
                  was no muscle or bone supporting his leg. His femur had
                  separated entirely from his pelvis. <br></br> <br /> Despite
                  how scary it sounded, there was a chance we could strengthen
                  Mo’s muscles enough to support himself and avoid amputation.
                  After many trips to the vet we are grateful to say that on
                  Mo’s check up x-ray, he received the all clear! He’s been
                  weight bearing and walking well without his splint and to top
                  off the good news, Mo and Steve also found the perfect forever
                  home together!
                </p>
              </>
            }
            img={moPhoto}
            title={"Mo"}
            isImgLeft={false}
          />
          <DonateStory
            body={
              <>
                <p>
                  Ivy is a purebred pointer who came into our care with her
                  litter of puppies after a terrible hunting injury that was
                  left untreated by her previous owner. On arrival she went
                  straight to the vet to start antibiotics, and the following
                  day she underwent surgery to debride and put a drain in the
                  wound and to spay her and ensure she never has another
                  unwanted litter again. <br /> <br />
                  She also had hairs embedded all through her tongue causing
                  painful ulcers which were removed, and now that she is healed
                  up and her stitches are out she is ready to learn what life
                  should be, despite her hardships Ivy is remarkably calm,
                  gentle and sweet.
                </p>
              </>
            }
            img={ivyPhoto}
            title={"Ivy"}
            isImgLeft={true}
          />
          <DonateStory
            body={
              <>
                <p>
                  Gerry was an incredibly sad, deflated, hurt, terrified little
                  cat. With immense time and love he blossomed into the most
                  confident and affectionate boy ever. He finally learnt what
                  love is and that not all humans are going to hurt him. He
                  finally felt safe and content. All that was left for him to do
                  was to find his forever home. Gerry ended up getting adopted
                  by who we thought was a perfect family for him. Months go by
                  and the updates from his family are so sweet, Gerry was
                  incredibly happy, he bonded with their cat and they became
                  best friends.
                  <br /> <br />
                  One day we get a call from a local shelter saying our Gerry
                  has been dumped there. We instantly went and picked him up.
                  But something wasn't right, Gerry's right eye was cloudy, red
                  and inflamed. Not only he was dumped back in a scary place
                  where he started but he was also hurt and confused. After
                  weeks of intense medication nothing has worked, his eye has
                  gotten much worse, Gerry has been diagnosed with Uveitis and
                  Glaucoma, along with a herpetic corneal ulcer that is at risk
                  of exploding any minute now. Despite how much pain he must be
                  feeling all he shows is his compassion and need for affection
                  and love from his humans. He went through many consultations
                  but his eye did not recover and had to be surgically removed.
                  However this was not the last obstacle for Gerry as he was
                  then diagnosed with progressive Feline Leukeemia. The
                  prognosis of this unfortunately means Gerry would eventually
                  succumb to the virus. Gerry was in the arms of his amazing
                  pallative-care foster carer up until his last breath.
                </p>
              </>
            }
            img={gerryPhoto}
            title={"Gerry"}
            isImgLeft={false}
          />
        </div>
      </article>
    </main>
  );
}

function DonatePriceCard({ img, price, desc, alt }) {
  return (
    <div className="flex flex-col gap-4 ">
      <div
        className={
          " relative aspect-[1] w-[100%] overflow-hidden rounded-xl bg-neutral-300 bg-cover  shadow-md"
        }
        draggable="false"
      >
        <img src={img} className="h-full w-full object-cover" alt={alt} />
        <span className="via-skin-fadeMid absolute bottom-0 left-0 right-0 flex items-center justify-center bg-gradient-to-t from-skin-fadeStart to-transparent pt-4 md:pt-0 ">
          <h1 className="text-4xl font-semibold text-skin-textprimary drop-shadow-lg md:py-5 md:text-5xl ">
            {price}
          </h1>
        </span>
      </div>
      <span className="text-xs sm:text-base">{desc}</span>
    </div>
  );
}

function DonateStory({ img, alt, body, isImgLeft, title }) {
  return (
    <>
      <div className="hidden h-fit w-full  flex-col gap-8 rounded-2xl border p-4 md:flex md:flex-row">
        {isImgLeft && (
          <img
            src={img}
            className="aspect-square rounded-3xl bg-neutral-300 object-cover text-center italic shadow-lg md:h-96 2xl:h-[30rem]"
            alt={alt}
          />
        )}
        <div className="flex h-fit w-full grow flex-col items-center gap-3 rounded-3xl bg-skin-bgsecondary p-4 text-skin-textsecondary shadow-xl">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <div className="flex h-full w-full flex-col gap-2">{body}</div>
        </div>
        {!isImgLeft && (
          <img
            src={img}
            className="aspect-square rounded-3xl bg-neutral-300 object-cover text-center italic shadow-lg md:h-96 2xl:h-[30rem]"
            alt={alt}
          />
        )}
      </div>
      {/* mobile version */}
      <div className="flex h-fit w-full flex-col  gap-4 rounded-2xl border  p-2 md:hidden md:flex-row ">
        <h1 className="text-center text-2xl font-semibold md:text-5xl">
          {title}
        </h1>
        <img
          src={img}
          className="aspect-square rounded-3xl bg-neutral-300 object-cover text-center italic shadow-lg md:h-[30rem]"
          alt={alt}
        />

        <div className="flex h-fit w-full grow flex-col items-center gap-3 rounded-3xl bg-skin-bgsecondary p-4 text-skin-textsecondary shadow-xl">
          <div className="flex h-full w-full flex-col gap-2 text-xs">
            {body}
          </div>
        </div>
      </div>
    </>
  );
}
