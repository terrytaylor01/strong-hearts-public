import React from "react";

import { ThemeContext } from "../App";
import catFosterImage from "../assets/cat-foster-page-main.jpg";
import catFoster1 from "../assets/cat-foster-page-1.jpg";
import catFoster2 from "../assets/cat-foster-page-2.jpg";
import catFoster3 from "../assets/cat-foster-page-3.jpg";

import FosterParagraph from "../components/FosterParagraph";
import FosterPageBody from "../components/FosterPageBody";

export default function CatFoster() {
  const vetListRef = React.useRef();

  const theme = React.useContext(ThemeContext);
  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  function scrollTo() {
    vetListRef.current.scrollIntoView();
  }

  return (
    <FosterPageBody
      mainBlurb={`Fostering a cat is a rewarding experience that takes dedication
    and love. Our foster carers receive plenty of support and advice
    as they join our great community striving for the same goal. No
    prior experience is needed to become a foster carer, just a home
    and love to give. Join us today!`}
      applicationLink={"https://form.jotform.com/213347539801053"}
      onboardingLink={
        "https://l.facebook.com/l.php?u=https%3A%2F%2Fcdn.fbsbx.com%2Fv%2Ft59.2708-21%2F321778653_1721906471544922_7749826309781330775_n.pdf%2FFoster-Carer-Onboarding-Information.pdf%3F_nc_cat%3D105%26ccb%3D1-7%26_nc_sid%3D2b0e22%26_nc_ohc%3Dd3gUX9nV728AX8_8Fai%26_nc_ht%3Dcdn.fbsbx.com%26oh%3D03_AdQnoRGaJjluJuA6qP0DCkoaaAWzX-KOKCfg70oFDw5q8w%26oe%3D6545810C%26dl%3D1%26fbclid%3DIwAR0DtWT26y3qTr2jgtG6mCuAy3kvZ-0hk7dFFrG9iC3C8wNrwgVBls3EncU&h=AT0RuvTG5A1Jjw2vx9SWk9bmdd85i-hTFe8PnJqyFVUFh7XFIPOwsd2p363Yf_mwdY9RiJThf799cWxfT1yuUPjunq_VOO1KlToKSJw2qAkI9OxPhaDdzg1z8sPOdbt_XAYoMw"
      }
      mainImage={catFosterImage}
      mainImageAlt={"a cat sitting in a cat tree"}
      infoBody={
        <>
          <FosterParagraph
            heading={"What you will need"}
            body={`Here are a list of supplies you will need organised at your home prior to your foster cat's arrival:
          
          - Litter tray and litter (please avoid crystal litter as it is highly toxic to kitten if ingested)
          - Cat food
          - Bowls for food and water
          
          The following items are ideal but not required:
          
          - Toys
          - Bedding
          - Carrier
          - Animal crate / play-pen (Highly reccomended for timid / shutdown cats and kittens)
          
          As we are a non-for-profit, we rely on donations. While we can support fosters with food and litter this depends on the availability of our supplies, as such we ask fosters to provide the essential and to reach out if they need assistance. All our fosters have access to our amazing discounted range from Royal Canin each month, not only for their fosters but their resident cat. This partnership with Royal Canin is in place to help our foster carers with essential supplies. Carriers are not needed but ideal as we are happy to lend one during the duration of your foster caring.`}
            iconSvg={
              <svg
                fill="#000000"
                height="100%"
                width="100%"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M451.395,217.581L402.286,83.177V12.19c0-6.732-5.459-12.19-12.19-12.19h-268.19c-6.732,0-12.19,5.459-12.19,12.19
          v70.986L60.605,217.581c-5.836,15.972-8.795,32.692-8.795,49.699v202.706C51.81,493.152,70.657,512,93.824,512h324.352
          c23.167,0,42.014-18.848,42.014-42.014V267.28C460.19,250.274,457.231,233.552,451.395,217.581z M134.095,24.381h243.81v48.762
          h-243.81V24.381z M435.81,427.794H263.746c-6.732,0-12.19,5.459-12.19,12.19c0,6.732,5.459,12.19,12.19,12.19H435.81v17.81
          c0,9.723-7.91,17.634-17.634,17.634H93.824c-9.723,0-17.633-7.91-17.633-17.634V267.28c0-14.143,2.461-28.049,7.314-41.332
          L130.43,97.524H381.57l46.925,128.424c4.853,13.283,7.314,27.19,7.314,41.332V427.794z"
                      />
                      <path
                        d="M303.931,288.469c-3.98-24.984-25.678-44.143-51.767-44.143c-26.089,0-47.787,19.159-51.767,44.143
          c-20.625,8.481-34.119,29.616-32.377,52.573c1.943,25.581,22.705,46.303,48.291,48.204c9.883,0.736,19.697-1.297,28.383-5.879
          c4.748-2.501,10.194-2.503,14.938,0.001c7.528,3.969,15.901,6.025,24.435,6.025c1.312,0,2.631-0.049,3.947-0.146
          c25.588-1.9,46.349-22.623,48.293-48.204C338.05,318.085,324.556,296.95,303.931,288.469z M311.996,339.195
          c-1.037,13.658-12.122,24.722-25.786,25.737c-5.313,0.402-10.572-0.686-15.203-3.131c-5.899-3.111-12.37-4.667-18.842-4.667
          c-6.472,0-12.943,1.556-18.842,4.667c-4.631,2.443-9.879,3.53-15.204,3.131c-13.663-1.014-24.749-12.078-25.785-25.737
          c-1.065-14.023,8.452-26.77,22.135-29.652c5.733-1.207,9.796-6.322,9.677-12.18l-0.02-0.617
          c0-15.461,12.577-28.038,28.038-28.038s28.038,12.577,28.038,27.994l-0.019,0.661c-0.121,5.859,3.942,10.973,9.677,12.18
          C303.545,312.425,313.061,325.172,311.996,339.195z"
                      />
                      <path
                        d="M252.165,219.947c21.847,0,39.619-17.772,39.619-39.619s-17.772-39.619-39.619-39.619s-39.619,17.773-39.619,39.619
          S230.32,219.947,252.165,219.947z M252.165,165.09c8.403,0,15.238,6.835,15.238,15.238s-6.835,15.238-15.238,15.238
          c-8.403,0-15.238-6.835-15.238-15.238S243.763,165.09,252.165,165.09z"
                      />
                      <path
                        d="M206.451,227.465c0-21.847-17.773-39.619-39.619-39.619s-39.619,17.773-39.619,39.619s17.772,39.619,39.619,39.619
          S206.451,249.311,206.451,227.465z M166.832,242.703c-8.403,0-15.238-6.835-15.238-15.238s6.835-15.238,15.238-15.238
          s15.238,6.835,15.238,15.238S175.234,242.703,166.832,242.703z"
                      />
                      <path
                        d="M337.498,187.845c-21.847,0-39.619,17.773-39.619,39.619s17.774,39.619,39.619,39.619
          c21.847,0,39.619-17.772,39.619-39.619S359.345,187.845,337.498,187.845z M337.498,242.703c-8.403,0-15.238-6.835-15.238-15.238
          s6.836-15.238,15.238-15.238c8.403,0,15.238,6.835,15.238,15.238S345.901,242.703,337.498,242.703z"
                      />
                      <path
                        d="M210.717,427.794h-2.96c-6.732,0-12.19,5.459-12.19,12.19c0,6.732,5.459,12.19,12.19,12.19h2.96
          c6.732,0,12.19-5.459,12.19-12.19C222.908,433.253,217.45,427.794,210.717,427.794z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            }
          />

          <FosterParagraph
            heading={"Isolation"}
            body={
              <p>
                All foster cats and kittens will need to be quarantined from
                existing household pets, unless specified differently. This is
                for a period of 14 days as the cat is coming straight from a
                pound we must ensure the health and safety of them and your
                current pets. A reccomended way to isolate is using a bathroom,
                laundry or spare room, where your foster can be completely
                separated for the isolation period. Isolation reduces the chance
                of disease or illnesses spreading, as symptoms may appear during
                this period allowing us to treat effectively. This also allows
                any treatment given on intake to do it's thing (flea and worm
                treatment, first vaccination)
              </p>
            }
            iconSvg={
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2 8H4.59067C4.03942 8 3.76379 8 3.55255 8.10569C3.35921 8.20242 3.20242 8.35921 3.10569 8.55255C3 8.76379 3 9.03942 3 9.59067V9.728C3 11.1692 3 11.8898 3.21315 12.5163C3.45355 13.2229 3.88684 13.8482 4.46405 14.3214C4.97584 14.7409 5.82994 15.0669 7.17937 15.573M17.8 8H19.4093C19.9606 8 20.2362 8 20.4474 8.10569C20.6408 8.20242 20.7976 8.35921 20.8943 8.55255C21 8.76379 21 9.03942 21 9.59067V9.728C21 11.1692 21 11.8898 20.7868 12.5163C20.5465 13.2229 20.1132 13.8482 19.536 14.3214C19.0242 14.7409 18.1929 15.036 16.8434 15.542M10 11H14M11 14H13M6 8V12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12V8H17.8028C17.2165 8 16.9233 8 16.6385 7.95881C16.2409 7.90131 15.8543 7.78423 15.4915 7.61153C15.2317 7.48782 14.9878 7.32521 14.5 7L13.8321 6.5547C13.2895 6.19301 12.6521 6 12 6C11.3479 6 10.7105 6.19301 10.168 6.5547L9.5 7C9.01218 7.32521 8.76827 7.48782 8.50846 7.61153C8.14573 7.78423 7.75906 7.90131 7.36145 7.95881C7.07666 8 6.78351 8 6.19722 8H6Z"
                  stroke="#5c4b3b"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <span ref={vetListRef}>
            <FosterParagraph
              heading={"Transportation"}
              body={
                <>
                  <p className="text-md  whitespace-pre-line font-light lg:pr-0 xl:mb-6 xl:text-xl">
                    {`Access to transportation is vital as your foster will likely need vetwork, it is also extremely important in the case of an emergency. Having access to a car is ideal, however certainly not a deal-breaker as we have a dedicated team of transport volunteers always ready to help and often get in cats need minimal to no transport requirement. Many of the cats and kittens we rescue are not yet desexed, microchipped or vaccinated, so we arrange for these procedures at partner vets closest to you. `}
                  </p>
                  <p className="text-md  whitespace-pre-line pr-10 font-light lg:pr-0 xl:mb-6 xl:text-xl">
                    {`Our partner vets are located in:
          - Sunshine
          - Yarraville
          - East Bentleigh
          - Lower Plenty
          - Mountain Gate
          - Cranbourne
          - Bayswater
          - Mornington`}
                  </p>
                </>
              }
              iconSvg={
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 17H16M8 17C8 18.1046 7.10457 19 6 19C4.89543 19 4 18.1046 4 17M8 17C8 15.8954 7.10457 15 6 15C4.89543 15 4 15.8954 4 17M16 17C16 18.1046 16.8954 19 18 19C19.1046 19 20 18.1046 20 17M16 17C16 15.8954 16.8954 15 18 15C19.1046 15 20 15.8954 20 17M10 5V11M4 11L4.33152 9.01088C4.56901 7.58593 4.68776 6.87345 5.0433 6.3388C5.35671 5.8675 5.79705 5.49447 6.31346 5.26281C6.8993 5 7.6216 5 9.06621 5H12.4311C13.3703 5 13.8399 5 14.2662 5.12945C14.6436 5.24406 14.9946 5.43194 15.2993 5.68236C15.6435 5.96523 15.904 6.35597 16.425 7.13744L19 11M4 17H3.6C3.03995 17 2.75992 17 2.54601 16.891C2.35785 16.7951 2.20487 16.6422 2.10899 16.454C2 16.2401 2 15.9601 2 15.4V14.2C2 13.0799 2 12.5198 2.21799 12.092C2.40973 11.7157 2.71569 11.4097 3.09202 11.218C3.51984 11 4.0799 11 5.2 11H17.2C17.9432 11 18.3148 11 18.6257 11.0492C20.3373 11.3203 21.6797 12.6627 21.9508 14.3743C22 14.6852 22 15.0568 22 15.8C22 15.9858 22 16.0787 21.9877 16.1564C21.9199 16.5843 21.5843 16.9199 21.1564 16.9877C21.0787 17 20.9858 17 20.8 17H20"
                    stroke="#5c4b3b"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
          </span>

          <FosterParagraph
            heading={"Foster carer support chat"}
            body={
              <p className="text-md  whitespace-pre-line  font-light lg:pr-0 xl:mb-6 xl:text-xl">
                Upon the arrival of your first foster cat, you will be invited
                to our exclusive Foster Carer Facebook support chat group.
                Communication is super important when fostering. Questions are
                fantastic and always encouraged. There is no such thing as a
                silly question! If you are concerned, or have any questions
                please reach out to your Strong Hearts Coordinator or write it
                in the support group chat. It’s also a great place to share
                pictures of your cats with the rest of the group and provide
                tips and tricks to each other. Teamwork makes the dream work!
                The Foster Carer Facebook support chat is a fantastic tool. It’s
                a group filled with people going through the exact same things
                you are, all with varying levels of experience and success. It’s
                a safe space and we encourage you to use it as much as you need
                and feel comfortable doing so.
              </p>
            }
            iconSvg={
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M780.7 582.4V286.3c0-74.2-60.7-134.9-134.9-134.9H198.2c-74.2 0-134.9 60.7-134.9 134.9v296.1c0 70.5 54.8 128.7 123.8 134.4 0 0-20 155.4 4.9 155.4s188.4-154.9 188.4-154.9h265.3c74.3 0 135-60.7 135-134.9z m-424.1 74.9l-17.4 16.4c-0.3 0.3-34.5 32.7-73.2 67.1-8.5 7.5-16.2 14.3-23.3 20.5 1.9-20.9 3.9-36.6 3.9-36.8l8-62.3L192 657c-38.5-3.2-68.7-36-68.7-74.6V286.3c0-19.9 7.8-38.6 22.1-52.8 14.2-14.2 33-22.1 52.8-22.1h447.6c19.9 0 38.6 7.8 52.8 22.1 14.2 14.2 22.1 33 22.1 52.8v296.1c0 19.9-7.8 38.6-22.1 52.8-14.2 14.2-33 22.1-52.8 22.1H356.6z"
                  fill="#5c4b3b"
                />
                <path
                  d="M830.3 337.9c-16.2-3.3-32.1 7.1-35.4 23.3-3.3 16.2 7.1 32.1 23.3 35.4 39 8 67.3 42.7 67.3 82.5v177c0 41.6-31.1 77.5-72.3 83.4l-32.7 4.7 7.8 32.1c2 8.1 3.9 16.8 5.8 25.3-17.6-16.4-37.3-35.2-55.2-52.7l-8.7-8.6H562.5c-21.9 0-36.6-1.4-47.2-8.6-13.7-9.3-32.4-5.8-41.7 7.9-9.3 13.7-5.8 32.4 7.9 41.7 25.7 17.5 55.3 19 81 19h143.2c10 9.7 27.3 26.3 45 42.8 16.2 15.1 29.6 27.1 39.8 35.9 20 17 29.3 23.1 41.6 23.1 9.7 0 18.7-4.4 24.8-12.1 10.1-12.9 10.2-29.1 0.5-78.7-1.4-7.2-2.9-14.2-4.3-20.6 54.4-21.1 92.4-74.3 92.4-134.6v-177c0.1-68-48.4-127.4-115.2-141.2z"
                  fill="#5c4b3b"
                />
              </svg>
            }
          />

          <FosterParagraph
            heading={"Weekly check-ins"}
            body={
              <>
                <p className="text-md  whitespace-pre-line  font-light lg:pr-0 xl:mb-6 xl:text-xl">
                  Once per week, we legally require you to provide us with an
                  update on your foster cat. Ideally, this includes an updated
                  picture and written update on how the cat is going in your
                  care, any changes in temperament, how it’s getting along with
                  other pets in your household, how it’s getting along with you
                  and your other family members etc.{" "}
                </p>{" "}
                <p>
                  {" "}
                  The weekly check-in isn’t only for the cats welfare, it is
                  also a welfare check on you! Sometimes foster caring can be
                  tough, we know that. You can try and try and a cat can just
                  continue to be stubborn and not come out from under the bed,
                  and sometimes that wears you down a bit and makes you feel a
                  bit flat. Those feelings of “failure” are perfectly normal and
                  every single one of our team members have experienced that.
                  We’re here to ensure every one of our foster carers is
                  supported so that they can care for and support their foster
                  cat. If you forget to reach out to us at least once per week,
                  don’t worry – you’ll find a Strong Hearts Coordinator will be
                  in touch with you anyway to touch base.
                </p>
              </>
            }
            iconSvg={
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#5c4b3b"
                  stroke-width="1.25"
                />
                <path
                  d="M9 12L10.6828 13.6828V13.6828C10.858 13.858 11.142 13.858 11.3172 13.6828V13.6828L15 10"
                  stroke="#5c4b3b"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />

          <FosterParagraph
            heading={"Adoption Process"}
            body={
              <div className="flex flex-col gap-2 pl-2 md:pl-8 [&>h1]:font-semibold">
                <h1 className="text-lg xl:text-xl">
                  {" "}
                  Photographing your fosters:{" "}
                </h1>
                <p className="text-md font-light lg:pr-0 xl:mb-6 xl:text-xl">
                  While the cat is in your care, we ask that you keep us updated
                  with regular pictures and videos. Look for photo opportunities
                  when possible. A good photo is the difference between a kitten
                  or cat staying in care for weeks. Photos with good lighting
                  that really capture the cuteness, quirks and personality of
                  your foster will really help with their adoption. We use all
                  of the cute photos and videos to post on their Pet Rescue page
                  to help them find their forever home. The more content you
                  have, the better! Pictures of them sleeping, playing, in their
                  favourite spot, that bring out their personality.
                </p>
                <h1 className="text-lg xl:text-xl"> Meet and Greets: </h1>
                <p className="text-md whitespace-pre-line  font-light lg:pr-0 xl:mb-6 xl:text-xl">
                  Using the details and photos you provide we will set up
                  profiles and start looking for suitable and beautiful homes.
                  Once a successful application is submitted a thorough phone
                  interview will take place, if this is successful a coordinator
                  will reach out to you to organise a meet and greet. If the
                  meet and greet goes well the adoption can take place on the
                  day. You will need to tell your coordinator how the meet and
                  greet goes. If successful your coordinator will send through
                  the account details to the adopter and email through all vet
                  paperwork (desexing certificate, vaccination history,
                  microchip details and change of owner forms.)
                </p>

                <h1 className="text-lg xl:text-xl"> After adoption: </h1>
                <p className="text-md whitespace-pre-line font-light lg:pr-0 xl:mb-6 xl:text-xl">
                  {`Saying goodbye is bittersweet, however it is important to remember that your goodbye is their hello to a long and beautiful life in a loving home, and then you have space to save another life. Adopting saves one life, fostering saves hundreds.
            
            We are always seeking valuable foster carers to provide care to our cats. Once your cat has been adopted, please let us know if you would, consider taking on another cat as a foster, if you need a little bit of a pause inbetween or if you think this was a one-off thing. No matter how long of a break you take we will always be happy to welcome you back.
            `}
                </p>
                <h1 className="text-xl xl:text-xl">
                  {" "}
                  Foster failing - wanting to adopt your foster:{" "}
                </h1>
                <p className="text-md whitespace-pre-line font-light lg:pr-0 xl:mb-6 xl:text-xl">
                  If you do fall completely in love with one of your foster cats
                  please let your coordinator or a team member know as soon as
                  possible where we can direct you through the adoption process.
                  This will involve filling out the application and paying the
                  adoption fee. This is to help go towards vetwork, supplies and
                  the runnings of the rescue. Like you, the entire team is a
                  volunteer run organisation that relies solely on adoption fees
                  and donations to continue saving lives.
                </p>
              </div>
            }
            iconSvg={
              <svg
                fill="#5c4b3b"
                height="100%"
                width="100%"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 394.661 394.661"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <g>
                      <g>
                        <path
                          d="M111.868,375.114c-7.514,0-14.662-4.797-19.12-12.832c-6.658-11.998-5.155-27.306,3.421-34.85
        c3.222-2.834,7.123-4.33,11.282-4.33c7.514,0,14.662,4.797,19.123,12.832c6.658,12,5.154,27.308-3.424,34.851
        C119.929,373.617,116.028,375.114,111.868,375.114z M107.451,335.102c-1.232,0-2.331,0.438-3.356,1.34
        c-3.802,3.345-5.088,12.388-0.854,20.018c2.243,4.043,5.629,6.654,8.627,6.654c1.233,0,2.332-0.439,3.358-1.341
        c3.802-3.343,5.088-12.386,0.855-20.016C113.836,337.715,110.449,335.102,107.451,335.102z"
                        />
                      </g>
                      <g>
                        <path
                          d="M282.795,375.114C282.795,375.114,282.795,375.114,282.795,375.114c-4.161,0-8.061-1.497-11.282-4.329
        c-8.577-7.544-10.08-22.851-3.423-34.85c4.46-8.036,11.608-12.833,19.122-12.833c4.159,0,8.061,1.496,11.282,4.33
        c8.575,7.543,10.077,22.852,3.419,34.85C297.456,370.317,290.309,375.114,282.795,375.114z M287.212,335.102
        c-2.998,0-6.386,2.612-8.63,6.656c-4.233,7.629-2.947,16.672,0.855,20.016c1.025,0.901,2.124,1.34,3.357,1.34
        c2.997,0,6.383-2.611,8.625-6.654c4.234-7.631,2.949-16.674-0.852-20.018C289.543,335.54,288.445,335.102,287.212,335.102z"
                        />
                      </g>
                    </g>
                    <g>
                      <path
                        d="M221.203,147.611c-3.313,0-6,2.686-6,6c0,3.273-2.664,5.936-5.938,5.936c-3.273,0-5.935-2.663-5.935-5.936v-7.777
      l14.572-12.489c1.844-1.58,2.554-4.115,1.798-6.424c-4.088-12.482-16.155-15.695-22.191-15.666
      c-0.018-0.001-0.034-0.004-0.051-0.004c-0.038-0.001-0.083,0.002-0.122,0.002c-0.043,0-0.092-0.003-0.134-0.002
      c-0.019,0-0.037,0.003-0.057,0.004c-6.039-0.02-18.097,3.189-22.185,15.666c-0.757,2.308-0.047,4.844,1.797,6.424l14.572,12.489
      v7.777c0,3.273-2.663,5.936-5.937,5.936c-3.273,0-5.936-2.663-5.936-5.936c0-3.314-2.687-6-6-6c-3.314,0-6,2.686-6,6
      c0,9.89,8.046,17.936,17.936,17.936c4.586,0,8.762-1.745,11.937-4.586c3.174,2.841,7.35,4.586,11.935,4.586
      c9.892,0,17.938-8.047,17.938-17.936C227.203,150.298,224.517,147.611,221.203,147.611z M197.246,123.249
      c0.001,0,0.002,0,0.003,0c0.012,0,0.022-0.001,0.034-0.001c0.015,0,0.029,0.002,0.044,0.002c0.044,0,0.088-0.001,0.131-0.001
      c0.069,0.003,5.675-0.063,9.039,4.066l-9.167,7.856l-9.172-7.86C191.332,123.395,196.501,123.249,197.246,123.249z"
                      />
                      <g>
                        <path
                          d="M174.864,110.442h-20.995c-3.314,0-6-2.687-6-6s2.686-6,6-6h20.995c3.313,0,6,2.687,6,6
        S178.177,110.442,174.864,110.442z"
                        />
                      </g>
                      <g>
                        <path
                          d="M240.792,110.442h-20.995c-3.314,0-6-2.687-6-6s2.686-6,6-6h20.995c3.313,0,6,2.687,6,6
        S244.106,110.442,240.792,110.442z"
                        />
                      </g>
                    </g>
                    <g>
                      <path
                        d="M89.502,298.543c-1.608-2.896-5.258-3.942-8.158-2.334c-2.897,1.608-3.942,5.261-2.334,8.158l6.242,11.245
      c1.097,1.975,3.143,3.089,5.252,3.089c0.984,0,1.983-0.243,2.906-0.755c2.897-1.608,3.942-5.261,2.334-8.158L89.502,298.543z"
                      />
                      <g>
                        <path
                          d="M309.411,315.612l6.242-11.245c1.608-2.897,0.563-6.55-2.334-8.158c-2.898-1.608-6.55-0.563-8.158,2.334l-6.242,11.245
        c-1.608,2.897-0.564,6.55,2.334,8.158c0.923,0.512,1.921,0.755,2.906,0.755C306.268,318.701,308.314,317.587,309.411,315.612z"
                        />
                        <path
                          d="M322.502,282.294c-4.642-4.083-10.087-6.647-15.954-7.566c0.487-1.565,0.934-3.131,1.337-4.694
        c1.449,0.215,2.925,0.336,4.427,0.336c17.956,0,32.564-15.868,32.564-35.374c0-19.506-14.607-35.375-32.564-35.375
        c-5.731,0-11.119,1.622-15.802,4.458c-6.917-9.216-15.917-16.36-25.922-20.785c6.259-5.166,11.554-10.919,15.77-17.113
        l29.166,5.668c0.387,0.075,0.771,0.111,1.151,0.111c2.814,0,5.326-1.99,5.883-4.857c0.633-3.253-1.492-6.402-4.745-7.034
        l-25.282-4.913c3.696-8.289,5.641-17.113,5.641-26.165c0-0.673-0.012-1.349-0.033-2.027l19.675-3.823
        c3.253-0.632,5.378-3.781,4.745-7.034c-0.632-3.253-3.781-5.375-7.034-4.745l-18.802,3.654
        c-1.214-6.021-3.17-12.12-5.799-18.146c29.027-41.772,22.541-89.53,22.243-91.588c-0.411-2.844-2.78-4.996-5.65-5.135
        c-32.462-1.561-53.139,9.697-64.766,19.416c-7.594,6.348-12.429,12.879-15.147,17.236c-9.813-3.502-20.001-5.326-30.272-5.326
        c-10.273,0-20.46,1.824-30.274,5.328c-2.716-4.356-7.546-10.885-15.146-17.238C140.284,9.842,119.599-1.416,87.146,0.146
        c-2.87,0.139-5.239,2.291-5.65,5.135c-0.298,2.058-6.783,49.817,22.244,91.59c-2.628,6.024-4.584,12.124-5.798,18.144
        l-18.803-3.654c-3.251-0.63-6.402,1.492-7.034,4.745c-0.633,3.253,1.492,6.402,4.745,7.034l19.676,3.824
        c-0.021,0.678-0.033,1.354-0.033,2.026c0,9.052,1.944,17.876,5.64,26.165l-25.282,4.913c-3.253,0.632-5.378,3.781-4.745,7.034
        c0.557,2.867,3.068,4.857,5.883,4.857c0.38,0,0.766-0.036,1.151-0.111l29.165-5.668c4.218,6.196,9.534,11.938,15.8,17.102
        c-10.017,4.423-19.025,11.574-25.947,20.798c-4.684-2.837-10.071-4.46-15.804-4.46c-17.958,0-32.567,15.869-32.567,35.375
        c0,19.506,14.609,35.374,32.567,35.374c1.501,0,2.975-0.12,4.423-0.335c0.406,1.561,0.87,3.126,1.361,4.69
        c-5.876,0.915-11.33,3.481-15.979,7.57c-18.371,16.159-20.101,51.626-3.939,80.741c10.825,19.507,27.666,31.625,43.95,31.625
        c7.735,0,14.95-2.75,20.864-7.952c3.673-3.231,6.667-7.245,8.998-11.815c16.689,5.94,35.668,9.078,55.296,9.079
        c0,0,0.001,0,0.002,0h0.006c0,0,0.001,0,0.002,0c19.625-0.001,38.606-3.134,55.296-9.074c2.331,4.569,5.325,8.581,8.997,11.812
        c5.914,5.201,13.129,7.951,20.864,7.951c0.001,0,0,0,0.001,0c16.282,0,33.123-12.118,43.948-31.625
        C342.604,333.919,340.872,298.454,322.502,282.294z M302.271,228.995h-9.836c2.337-9.99,10.361-17.375,19.877-17.375
        c11.339,0,20.564,10.486,20.564,23.375c0,12.889-9.225,23.374-20.564,23.374c-9.516,0-17.54-7.384-19.877-17.374h9.836
        c3.314,0,6-2.687,6-6C308.271,231.681,305.584,228.995,302.271,228.995z M301.818,14.023
        c0.524,13.247-0.553,43.051-17.251,70.571c-4.368-7.253-9.691-14.229-15.85-20.631c-2.112-2.196-4.285-4.282-6.506-6.269
        C271.581,29.092,291.469,17.984,301.818,14.023z M276.418,15.25c-8.982,7.444-18.049,18.432-24.127,34.512
        c-4.375-3.108-8.901-5.838-13.545-8.178C243.591,34.303,254.881,21.293,276.418,15.25z M155.913,41.585
        c-4.643,2.341-9.169,5.069-13.544,8.178c-6.072-16.069-15.128-27.061-24.103-34.504
        C139.787,21.305,151.072,34.309,155.913,41.585z M92.844,14.027c10.347,3.958,30.235,15.056,39.607,43.667
        c-2.221,1.987-4.394,4.073-6.506,6.27c-6.159,6.404-11.484,13.382-15.853,20.637C93.391,57.076,92.32,27.269,92.844,14.027z
         M121.361,163.641l35.99-6.994c3.253-0.632,5.378-3.781,4.745-7.034c-0.632-3.253-3.787-5.375-7.034-4.745l-40.747,7.919
        c-3.759-7.421-5.769-15.363-5.816-23.497l46.563,9.05c0.387,0.075,0.771,0.111,1.151,0.111c2.814,0,5.326-1.99,5.883-4.857
        c0.633-3.253-1.492-6.402-4.745-7.034l-47.667-9.264c7.043-35.697,44.564-73.824,87.646-73.824
        c43.083,0,80.605,38.127,87.649,73.823l-47.67,9.265c-3.253,0.632-5.378,3.781-4.745,7.034c0.557,2.867,3.068,4.857,5.883,4.857
        c0.38,0,0.765-0.036,1.151-0.111l46.566-9.05c-0.048,8.134-2.058,16.076-5.817,23.497l-40.749-7.919
        c-3.251-0.63-6.402,1.492-7.034,4.745c-0.633,3.253,1.492,6.402,4.745,7.034l35.991,6.994
        c-4.561,5.658-10.274,10.83-16.996,15.34c-3.099-0.521-6.238-0.796-9.395-0.796h-0.095c-19.157,0.032-36.46,9.492-49.483,26.842
        c-13.025-17.349-30.326-26.809-49.482-26.841h-0.096c-3.157,0-6.299,0.274-9.4,0.797
        C131.634,174.472,125.921,169.301,121.361,163.641z M82.353,258.369c-11.341,0-20.567-10.485-20.567-23.374
        c0-12.889,9.226-23.375,20.567-23.375c9.516,0,17.539,7.385,19.876,17.375h-9.837c-3.314,0-6,2.686-6,6c0,3.313,2.686,6,6,6
        h9.837C99.892,250.985,91.868,258.369,82.353,258.369z M125.108,377.699c-3.743,3.292-8.096,4.962-12.938,4.962
        c-11.927,0-24.747-9.751-33.458-25.448c-5.476-9.865-8.539-20.887-9.248-31.264l7.316,5.516c1.082,0.816,2.35,1.21,3.607,1.21
        c1.819,0,3.617-0.824,4.796-2.389c1.995-2.647,1.467-6.408-1.179-8.403l-9.348-7.047c-1.454-1.097-3.245-1.426-4.896-1.066
        c1.184-9.395,4.632-17.458,10.323-22.464c3.744-3.294,8.099-4.965,12.942-4.965c1.97,0,3.963,0.272,5.959,0.786
        c-1.849,1.258-2.922,3.499-2.564,5.858l2.042,13.475c0.45,2.973,3.009,5.103,5.925,5.103c0.299,0,0.603-0.022,0.907-0.069
        c3.275-0.496,5.529-3.555,5.033-6.83l-2.021-13.34c6.783,4.37,13.16,11.43,18.175,20.465
        C139.561,335.354,138.932,365.538,125.108,377.699z M100.975,275.285c-1.138-3.124-2.088-6.251-2.846-9.358
        c10.003-6.044,16.789-17.641,16.789-30.932c0-8.73-2.932-16.725-7.774-22.901c9.829-13.614,25.03-21.907,40.61-21.907h0.075
        c17.438,0.029,33.193,10.205,44.362,28.652c1.129,1.863,3.108,2.893,5.139,2.893l0.002-0.004l0.002,0.004
        c2.03,0,4.011-1.03,5.139-2.893c11.169-18.447,26.925-28.623,44.363-28.653h0.074c15.58,0,30.781,8.295,40.608,21.908
        c-4.843,6.177-7.774,14.172-7.774,22.901c0,13.299,6.794,24.901,16.807,30.942c-0.758,3.101-1.715,6.225-2.852,9.345
        c-13.648,3.189-26.941,14.34-36.01,30.684c-5.278,9.51-8.635,19.695-10.14,29.665c-14.187,11.934-31.055,23.361-50.217,34.018
        c-19.275-10.714-36.139-22.108-50.204-33.921c-1.498-10.001-4.859-20.222-10.154-29.763
        C127.907,289.627,114.62,278.476,100.975,275.285z M147.914,351.756c8.306,6.411,17.391,12.674,27.186,18.752
        c-10.194-1.366-19.938-3.685-28.938-6.882C147.088,359.85,147.681,355.874,147.914,351.756z M219.529,370.513
        c9.773-6.077,18.867-12.365,27.215-18.826c0.23,4.143,0.825,8.143,1.757,11.939
        C239.489,366.828,229.735,369.148,219.529,370.513z M309.478,330.285c1.179,1.565,2.977,2.39,4.796,2.39
        c1.257,0,2.525-0.395,3.606-1.209l7.317-5.516c-0.708,10.377-3.772,21.398-9.246,31.264
        c-8.712,15.697-21.531,25.447-33.457,25.447c-4.842,0-9.195-1.67-12.939-4.962c-13.824-12.161-14.454-42.345-1.375-65.911
        c5.015-9.034,11.391-16.094,18.173-20.464l-2.02,13.339c-0.496,3.277,1.758,6.335,5.034,6.831
        c0.305,0.046,0.607,0.068,0.906,0.068c2.917,0,5.475-2.131,5.925-5.103l2.04-13.477c0.357-2.358-0.716-4.598-2.564-5.856
        c1.996-0.515,3.99-0.786,5.96-0.786c4.843,0,9.197,1.67,12.941,4.964c5.691,5.006,9.141,13.069,10.323,22.465
        c-1.649-0.359-3.438-0.03-4.892,1.065l-9.35,7.047C308.011,323.877,307.483,327.639,309.478,330.285z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            }
          />

          <FosterParagraph
            heading={"Adoption Days"}
            body={
              <p className="text-md whitespace-pre-line font-light lg:pr-0 xl:mb-6 xl:text-xl">
                A roundabout once a month, Strong Hearts hosts an Adoption Day.
                These are usually hosted out of a PETstock store, commonly East
                Brighton or Hawthorn. Adoption Days are a hugely successful way
                to showcase as many of the cats we have in our care as possible,
                and invite the community to come and see them and hopefully take
                one (or more!) home to their forever home. We will contact you
                with 7-14 days notice about an upcoming Adoption Day and its
                location and will let you know if we would really like the cat
                you are caring for to be in attendance. It would be great if you
                could drop the cat off at the event on the day, and pick it up
                if the cat unfortunately hasn’t been adopted. In some cases, we
                have Adoption Coordinators travelling past your area and they
                may be able to collect and drop off the cat one way or both.
                Either way, please let us know which suits and we will do our
                best to accommodate.
              </p>
            }
            iconSvg={
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M807 171H703.3c-16.6 0-30 13.4-30 30s13.4 30 30 30H807c31.6 0 57.4 24 57.4 53.4v42.3H125.2v-42.3c0-29.5 25.7-53.4 57.4-53.4H293c16.6 0 30-13.4 30-30s-13.4-30-30-30H182.5c-64.7 0-117.4 50.9-117.4 113.4v527.7c0 62.5 52.7 113.4 117.4 113.4H807c64.7 0 117.4-50.9 117.4-113.4V284.5c0-62.6-52.7-113.5-117.4-113.5z m0 694.6H182.5c-31.6 0-57.4-24-57.4-53.4V386.8h739.2v425.4c0.1 29.5-25.7 53.4-57.3 53.4z"
                  fill="#5c4b3b"
                />
                <path
                  d="M447.6 217.1c-12.4-6.1-27-2.8-35.7 7.1-2.2-6.7-4-16.2-4-28.1 0-13 2.2-23 4.6-29.8 9.5 8.1 23.5 9.6 34.9 2.8 14.2-8.5 18.8-27 10.3-41.2-15.5-25.9-35.9-29.7-46.6-29.7-36.6 0-63.1 41.2-63.1 97.8s26.4 98 63 98c20.6 0 39-13.4 50.4-36.7 7.3-14.9 1.1-32.9-13.8-40.2zM635.9 218.5c-12.4-6.1-27-2.8-35.7 7.1-2.2-6.7-4-16.2-4-28.1 0-13 2.2-23 4.6-29.8 9.5 8.1 23.5 9.6 34.9 2.8 14.2-8.5 18.8-27 10.3-41.2-15.5-25.9-35.9-29.7-46.6-29.7-36.6 0-63.1 41.2-63.1 97.8s26.5 97.8 63.1 97.8c20.6 0 39-13.4 50.4-36.7 7.1-14.7 0.9-32.7-13.9-40z"
                  fill="#5c4b3b"
                />
                <path
                  d="M700.2 514.5H200.5c-16.6 0-30 13.4-30 30s13.4 30 30 30h499.7c16.6 0 30-13.4 30-30s-13.5-30-30-30zM668.4 689.8h-74c-16.6 0-30 13.4-30 30s13.4 30 30 30h74c16.6 0 30-13.4 30-30s-13.4-30-30-30zM479.3 689.8H200.5c-16.6 0-30 13.4-30 30s13.4 30 30 30h278.8c16.6 0 30-13.4 30-30s-13.4-30-30-30z"
                  fill="#5c4b3b"
                />
              </svg>
            }
          />

          <FosterParagraph
            heading={"Vet Appointments"}
            body={
              <>
                <p className="text-md whitespace-pre-line font-light lg:pr-0 xl:mb-6 xl:text-xl">
                  {`Strong Hearts have a pre-approved list of vet clinics that provide care to our cats. If you have reported an illness or concern about one of the cats in your care, Strong Hearts will arrange to book an appointment with one of our partnered vet clinics. While you think you are trying to be helpful, we ask that you please do not book the cat in to your local vet, or try to book the cat into one of our pre-approved vets yourself.

            As a registered rescue, we are required to follow certain legislated procedures and it is essential that a Strong Hearts administrator organises this appointment and books it through the proper channels we have in place.`}
                </p>
                <p className="text-md whitespace-pre-line font-light lg:pr-0 xl:mb-6 xl:text-xl">
                  Our partnered vets are located{" "}
                  <button className="font-medium underline" onClick={scrollTo}>
                    here
                  </button>{" "}
                </p>
              </>
            }
            iconSvg={
              <svg
                width="100%"
                height="100%"
                viewBox="-7.82 0 58.04 58.04"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Group_167"
                  data-name="Group 167"
                  transform="translate(-287.105 -437.906)"
                >
                  <path
                    id="Path_535"
                    data-name="Path 535"
                    d="M326.2,447.871h-35.79a2.008,2.008,0,0,0-2.008,2.008v42.763a2.008,2.008,0,0,0,2.008,2.008H326.2a2.009,2.009,0,0,0,2.008-2.009v-6.68h0V449.879A2.007,2.007,0,0,0,326.2,447.871Z"
                    fill="none"
                    stroke="#5c4b3b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.592"
                  />
                  <path
                    id="Path_536"
                    data-name="Path 536"
                    d="M308.3,455.065"
                    fill="none"
                    stroke="#5c4b3b"
                    stroke-miterlimit="10"
                    stroke-width="2.592"
                  />
                  <path
                    id="Path_537"
                    data-name="Path 537"
                    d="M308.3,455.065"
                    fill="none"
                    stroke="#5c4b3b"
                    stroke-miterlimit="10"
                    stroke-width="2.592"
                  />
                  <path
                    id="Path_538"
                    data-name="Path 538"
                    d="M312.94,464.3a4.641,4.641,0,0,0-4.621,4.248.017.017,0,0,1-.033,0,4.641,4.641,0,0,0-5.065-4.227,4.829,4.829,0,0,0-4.171,5.291c.194,2.273,1.4,4.252,3.923,6.559,2.046,1.874,5.061,4.3,5.256,4.459a.014.014,0,0,0,.019,0c.2-.157,3.715-2.946,5.384-4.46,2.28-2.068,3.577-4.059,3.881-6.223A4.819,4.819,0,0,0,312.94,464.3Z"
                    fill="none"
                    stroke="#5c4b3b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.333"
                  />
                  <path
                    id="Path_539"
                    data-name="Path 539"
                    d="M312.06,444.646v-1.77a3.673,3.673,0,1,0-7.347,0v1.77h-7.732V451.9h22.81v-7.257Z"
                    fill="none"
                    stroke="#5c4b3b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.592"
                  />
                </g>
              </svg>
            }
          />

          <FosterParagraph
            heading={"Turns out fostering isn't for me"}
            body={
              <p className="text-md whitespace-pre-line font-light lg:pr-0 xl:mb-6 xl:text-xl">
                That’s okay. These things happen. Please contact your Strong
                Hearts coordinator as soon as you make this decision. Please be
                mindful, Strong Hearts is run solely on the goodwill of
                volunteers who dedicate as much time as they can to the rescue,
                but they do have other jobs and family commitments. We will do
                our best to re-home the cat as soon as possible but please be
                aware this may take us 5-7 days to find another temporary home.
                We just ask for your patience while we do this.
              </p>
            }
            iconSvg={
              <svg
                fill="#5c4b3b"
                height="100%"
                width="100%"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 415.473 415.473"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M378.612,53.796c-23.77-23.77-55.373-36.86-88.988-36.86c-30.382,0-59.121,10.693-81.917,30.3
  c-22.796-19.606-51.535-30.3-81.917-30.3c-33.616,0-65.219,13.09-88.988,36.86c-49.068,49.068-49.068,128.909,0,177.977
  l163.834,163.834c1.953,1.953,4.512,2.929,7.071,2.929c2.559,0,5.119-0.976,7.071-2.929l163.835-163.834
  c23.77-23.77,36.86-55.373,36.86-88.988C415.473,109.169,402.382,77.566,378.612,53.796z M364.47,217.631L207.707,374.394
  L50.943,217.631c-19.992-19.992-31.002-46.573-31.002-74.846c0-28.273,11.01-54.854,31.003-74.847
  c19.992-19.992,46.572-31.002,74.846-31.002c28.273,0,54.854,11.01,74.846,31.002c1.875,1.875,4.419,2.929,7.072,2.929
  c2.652,0,5.196-1.054,7.071-2.929c19.992-19.992,46.573-31.002,74.846-31.002c28.273,0,54.854,11.01,74.846,31.002
  C405.741,109.209,405.741,176.361,364.47,217.631z"
                  />
                  <path
                    d="M326.966,127.583c0-13.226-5.149-25.666-14.507-35.037c-19.32-19.307-50.747-19.306-70.056,0.002l-8.397,8.396
  l-8.395-8.395c-9.356-9.356-21.796-14.509-35.028-14.509s-25.672,5.153-35.028,14.509c-9.356,9.356-14.51,21.796-14.51,35.028
  s5.153,25.672,14.509,35.028l8.395,8.395l-8.398,8.398c-9.353,9.354-14.504,21.792-14.504,35.023s5.151,25.67,14.504,35.023
  c9.359,9.359,21.801,14.513,35.034,14.513c13.234,0,25.673-5.155,35.025-14.513l8.392-8.393l8.397,8.397
  c9.658,9.657,22.343,14.486,35.028,14.486s25.371-4.829,35.028-14.486c9.356-9.356,14.509-21.796,14.509-35.028
  s-5.153-25.672-14.509-35.028l-8.392-8.392l8.397-8.397C321.814,153.253,326.966,140.814,326.966,127.583z M211.465,235.307
  c-5.576,5.58-12.991,8.653-20.88,8.653c-7.891,0-15.31-3.074-20.891-8.656c-5.576-5.576-8.647-12.991-8.647-20.881
  s3.071-15.305,8.647-20.881l8.398-8.398l41.768,41.768L211.465,235.307z M298.313,235.309
  c-10.149,10.149-25.905,11.349-37.387,3.609c2.541-3.878,2.11-9.135-1.299-12.543c-3.543-3.544-9.079-3.86-12.993-0.973
  l-67.03-67.03c2.887-3.914,2.571-9.45-0.972-12.993c-3.41-3.411-8.671-3.841-12.551-1.295c-3.273-4.837-5.036-10.535-5.036-16.505
  c0-7.89,3.073-15.307,8.651-20.886l0,0c5.579-5.579,12.996-8.651,20.886-8.651c5.97,0,11.668,1.762,16.505,5.036
  c-2.547,3.88-2.116,9.141,1.295,12.551c1.953,1.953,4.512,2.929,7.071,2.929c2.085,0,4.165-0.66,5.922-1.956l67.03,67.029
  c-2.887,3.914-2.571,9.45,0.973,12.994c1.953,1.953,4.512,2.929,7.071,2.929c1.911,0,3.821-0.545,5.48-1.634
  c3.273,4.837,5.036,10.535,5.036,16.505C306.965,222.313,303.893,229.73,298.313,235.309z M298.319,148.464l-8.397,8.397
  l-41.773-41.773l8.397-8.396c11.513-11.513,30.254-11.511,41.769-0.005c5.579,5.587,8.652,13.009,8.652,20.897
  C306.966,135.472,303.895,142.888,298.319,148.464z"
                  />
                  <path
                    d="M189.922,119.944l-6.974,6.974c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.953,4.512,2.929,7.071,2.929
  s5.119-0.976,7.071-2.929l6.974-6.974c3.905-3.905,3.905-10.237,0-14.143C200.16,116.039,193.828,116.039,189.922,119.944z"
                  />
                  <path
                    d="M270.918,200.94l-6.974,6.974c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.953,4.512,2.929,7.071,2.929
  s5.119-0.976,7.071-2.929l6.974-6.974c3.905-3.905,3.905-10.237,0-14.143C281.156,197.035,274.824,197.035,270.918,200.94z"
                  />
                </g>
              </svg>
            }
          />
        </>
      }
      bottomImages={{
        first: catFoster1,
        firstAlt:
          "an amused foster carer taking a selfie with their black cat sitting upon a couch cousion with it's tounge showing",
        second: catFoster2,
        secondAlt:
          "an older gentleman sitting on the floor patting a cat who has it's head bowed",
        third: catFoster3,
        thirdAlt:
          "a foster carer scratching the chin of a relaxed cat lounging in a cat tree",
      }}
    />
  );
}
