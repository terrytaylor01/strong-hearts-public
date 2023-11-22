import React from "react";
import { ThemeContext } from "../App";

import ae from "../assets/donate-merchant/american-express.png";
import visa from "../assets/donate-merchant/visa.png";
import mastercard from "../assets/donate-merchant/mastercard.png";
import paypal from "../assets/donate-merchant/paypal.png";
import discover from "../assets/donate-merchant/discover.png";

import sampleDonateCard from "../assets/cat-donate.jpg";

export default function DonatePage() {
  const theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

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
          <div className="flex gap-3 min-h-[30px]">
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
      <article className="flex w-full flex-col items-center gap-12 pt-6 md:gap-4 md:pt-24 xl:max-w-[60%]">
        <h1 className="w-full text-2xl xl:text-5xl">
          Here’s what your donation can do
        </h1>
        <div className=" grid  grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 sm:grid-rows-3 ">
          <AdoptPriceCard
            img={sampleDonateCard}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
            }
            price={"$100"}
          />
          <AdoptPriceCard
            img={sampleDonateCard}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
            }
            price={"$200"}
          />
          <AdoptPriceCard
            img={sampleDonateCard}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
            }
            price={"$300"}
          />
          <AdoptPriceCard
            img={sampleDonateCard}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
            }
            price={"$400"}
          />
          <AdoptPriceCard
            img={sampleDonateCard}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
            }
            price={"$500"}
          />
          <AdoptPriceCard
            img={sampleDonateCard}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
            }
            price={"$600"}
          />
          <AdoptPriceCard
            img={sampleDonateCard}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
            }
            price={"$700"}
          />
          <AdoptPriceCard
            img={sampleDonateCard}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
            }
            price={"$900"}
          />
          <AdoptPriceCard
            img={sampleDonateCard}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
            }
            price={"$1000"}
          />
        </div>
      </article>
    </main>
  );
}

function AdoptPriceCard({ img, price, desc }) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={
          " relative aspect-[393/450] w-[100%] overflow-hidden rounded-xl bg-neutral-300 bg-cover  shadow-md"
        }
        draggable="false"
      >
        <img src={img} className="h-full w-full object-cover" />
        <span className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-gradient-to-t from-skin-fadeStart to-transparent  ">
          <h1 className="text-2xl font-semibold text-skin-involvedcards drop-shadow-lg md:py-5 md:text-5xl">
            {price}
          </h1>
        </span>
      </div>
      <span className="text-xs sm:text-base">{desc}</span>
    </div>
  );
}
