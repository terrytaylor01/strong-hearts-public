import React from "react";
import SupporterArticle from "../components/SupporterArticle";

import vetPicture from "../assets/supporter-page-pictures/vet-collage.jpg";
import petStockLogo from "../assets/supporter-page-pictures/petstock-logo.png";
import petbarnLogo from "../assets/supporter-page-pictures/petbarn-logo.jpg";
import arcLogo from "../assets/supporter-page-pictures/arc-logo.png";

export default function SupportersPage() {
  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);
  return (
    <main className="theme-home mb-24 flex min-h-[90vh] w-screen flex-col items-center font-inter text-skin-textprimary">
      <section className="flex w-full flex-col items-center pt-12 md:w-[80%] md:pt-24">
        <div>
          <h1 className="text-center text-3xl md:text-left md:text-5xl">
            Our most generous supporters!
          </h1>
        </div>
        <SupporterArticle
          companyTitle={"Vet Partners"}
          body={
            <>
              <p>
                We are incredibly grateful to our exceptional veterinary
                partners who play an critical role in the wellbeing of all our
                animals, from routine check-ups and desexing procedures to
                critical emergencies. Your unwavering dedication and expertise
                are the pillars of our rescue's success, and we couldn't fulfill
                our mission without your invaluable support.
              </p>
              <div className="ml-4 flex gap-5 md:text-base ">
                <ul className="w-fit list-disc md:pr-12">
                  <li>East Bentleigh Animal Care</li>
                  <li>East Bentleigh Veterinary Clinic</li>
                  <li>Kitten Clinic</li>
                </ul>
                <ul className="w-fit list-disc md:pr-12">
                  <li>Lower Plenty Veterinary Clinic</li>
                  <li>Meow & Friends Community Vet</li>
                  <li>Mountain Gate Veterinary Clinic</li>
                </ul>
                <ul className="w-fit list-disc md:pr-12">
                  <li>Progressive Vet Care</li>
                  <li>Westside Community Desexing Inc</li>
                  <li>Yarraville Veterinary Clinic</li>
                </ul>
              </div>
            </>
          }
          img={vetPicture}
        />

        <SupporterArticle
          companyTitle={"PETstock"}
          body={
            <>
              <p>
                We extend our heartfelt appreciation to the PETstock stores
                across Melbourne for their unwavering support in helping us find
                forever homes for our rescue animals. Their partnership not only
                allows us to host regular, successful adoption days but also
                generously provides us with access to their adoption pods within
                their stores. In these pods, our cat and bun friends receive the
                dedicated care and attention they deserve while they patiently
                await their loving families.
              </p>
              <div className="ml-4 flex gap-5 md:text-base ">
                <ul className="w-fit list-disc md:pr-12">
                  <li>PETstock Braeside</li> <li>PETstock Brighton East</li>
                  <li>PETstock Chadstone</li>
                </ul>
                <ul className="w-fit list-disc md:pr-12">
                  <li>PETstock Hawthorn East</li>
                  <li>PETstock Mornington Central</li>
                  <li>PETstock Prahran</li>
                </ul>
                <ul className="w-fit list-disc md:pr-12">
                  <li>PETstock Hawthorn</li>
                  <li>PETstock South Morang</li>
                  <li>PETstock Kilsyth</li>
                </ul>
              </div>
            </>
          }
          img={petStockLogo}
        />
        <SupporterArticle
          companyTitle={"Petbarn"}
          body={
            <>
              <p>
                We extend our heartfelt thanks to the compassionate Petbarn
                stores across Melbourne, whose support has been instrumental in
                our efforts to host successful adoption days and ensure that the
                animals in our care are well-fed and nurtured while they await
                their loving forever homes.
              </p>
              <div className="ml-4 flex gap-5 md:text-base ">
                <ul className="w-fit list-disc md:pr-12">
                  <li>Petbarn Bayswater</li> <li>Petbarn Camberwell</li>
                  <li>Petbarn Chadstone</li>
                </ul>
                <ul className="w-fit list-disc md:pr-12">
                  <li>Petbarn Chirnside Park</li>
                  <li>Petbarn South Yarra</li>
                  <li>Petbarn Nunawading </li>
                </ul>
                <ul className="w-fit list-disc md:pr-12">
                  <li>Petbarn Preston</li>
                  <li>Petbarn Richmond</li>
                </ul>
              </div>
            </>
          }
          img={petbarnLogo}
        />
        <SupporterArticle
          companyTitle={"Animal Rescue Cooperative (ARC)"}
          body={
            <>
              <p>
                The ARC’s mission is to save animals by supporting rescue. We do
                this by providing support programs and supply donations helping
                rescuers, peak bodies, and aligned industry partners to get help
                where it is needed.
              </p>
            </>
          }
          img={arcLogo}
        />

        <SupporterArticle
          companyTitle={"Rescues"}
          body={
            <>
              <p>
                We want to take a moment to acknowledge the incredible bond and
                partnership we share with fellow animal rescues in our
                community. Together, we embark on the challenging yet vital
                mission of saving kill-listed animals from pounds and shelters.
                It's a heavy responsibility, one that we all carry with care and
                compassion.
              </p>
              <p>
                ​In this journey, we deeply appreciate how closely we
                collaborate, taking turns to extend a helping hand to each
                other, ensuring that no animal is left behind. We firmly believe
                that in the world of animal rescue, it's a collective effort
                that makes the greatest impact. One rescue alone cannot bear the
                weight of this responsibility, and we are immensely grateful for
                your presence and support.
              </p>
              <p>
                Thank you for being there for us, and we look forward to
                continuing to stand together, ensuring that every animal in need
                finds the love, care, and forever home they deserve.
              </p>
            </>
          }
        />

        <SupporterArticle
          companyTitle={"Other key partnerships"}
          body={
            <>
              <p>
                We are proud to have developed numerous other key partnerships
                that are equally crucial in sustaining our mission. These
                collaborations form the backbone of our efforts, enabling us to
                continue the essential work we do for the animals in our care
              </p>
              <div className="ml-4 md:text-base">
                <ul className="w-fit list-disc ">
                  <li>Kazoo</li>
                  <li>Koala</li>
                  <li>Brighton Security Centre</li>
                  <li>Kitty Knickers</li>
                  <li>Escargot Bakery</li>
                </ul>
              </div>
            </>
          }
        />
      </section>
    </main>
  );
}
