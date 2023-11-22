import React from "react";

const AdoptCarousel = React.lazy(() => import("../components/AdoptCarousel"));
import GetInvolvedSection from "../components/GetInvolvedSection";

import { ThemeContext } from "../App";
import dogCollage from "../assets/dog-collage.png";
import HeroSection from "../components/HeroSection";
import dogAdopt from "../assets/dog-adopt.png";
import dogFoster from "../assets/dog-foster.png";
import dogDonate from "../assets/dog-donate.jpg";
import AdoptionDayBanner from "../components/AdoptionDayBanner";

export default function DogPage() {
  const theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  return (
    <main className={theme}>
      <AdoptionDayBanner />

      <article
        className={
          theme +
          " mt-2 bg-none bg-no-repeat pb-16 font-inter bg-blend-multiply"
        }
      >
        <HeroSection
          heading={"Strong Hearts Dog Rescue"}
          bodyText={
            "Strong Heart's mission is to rescue and transform the lives of kill-listed dogs in need. From those facing uncertain futures to the abandoned and overlooked, we stand by their side. Our dedicated foster families provide a safe haven, showering each canine with love until they find their forever home. No effort is spared—we believe every wagging tail deserves the best. We ensure our dogs thrive by meeting their every need, from cozy beds to wag-worthy treats. Responsible pet ownership is our creed, advocating for desexing as well as ensuring each dog gets the lifestyle they need."
          }
          stats={{
            firstNumber: 28,
            firstTitle: "total dogs in care",
            secondNumber: 298,
            secondTitle: "total dogs adopted out",
          }}
          socialsBody={
            <div className="mb-12 flex gap-3 xl:mb-16">
              <a
                href="https://www.instagram.com/strongheartscats/"
                target="_blank"
              >
                <svg
                  role="img"
                  aria-label="Instagram link to Strong Hearts Cat Rescue"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9571 7.98291C11.4284 7.98291 7.77559 11.615 7.77559 16.1179C7.77559 20.6208 11.4284 24.2529 15.9571 24.2529C20.4858 24.2529 24.1386 20.6208 24.1386 16.1179C24.1386 11.615 20.4858 7.98291 15.9571 7.98291ZM15.9571 21.4067C13.0306 21.4067 10.638 19.0349 10.638 16.1179C10.638 13.2009 13.0234 10.8291 15.9571 10.8291C18.8908 10.8291 21.2761 13.2009 21.2761 16.1179C21.2761 19.0349 18.8836 21.4067 15.9571 21.4067ZM26.3816 7.65015C26.3816 8.70508 25.5271 9.54761 24.4733 9.54761C23.4123 9.54761 22.5649 8.698 22.5649 7.65015C22.5649 6.60229 23.4194 5.75269 24.4733 5.75269C25.5271 5.75269 26.3816 6.60229 26.3816 7.65015ZM31.8003 9.57593C31.6792 7.03418 31.0953 4.78271 29.2226 2.92773C27.3571 1.07275 25.0927 0.492187 22.5365 0.364746C19.9019 0.216064 12.0052 0.216064 9.37059 0.364746C6.82144 0.485107 4.55711 1.06567 2.68441 2.92065C0.811711 4.77563 0.234947 7.0271 0.106777 9.56885C-0.0427539 12.1885 -0.0427539 20.0403 0.106777 22.6599C0.227826 25.2017 0.811711 27.4531 2.68441 29.3081C4.55711 31.1631 6.81432 31.7437 9.37059 31.8711C12.0052 32.0198 19.9019 32.0198 22.5365 31.8711C25.0927 31.7507 27.3571 31.1702 29.2226 29.3081C31.0882 27.4531 31.6721 25.2017 31.8003 22.6599C31.9498 20.0403 31.9498 12.1956 31.8003 9.57593ZM28.3967 25.4707C27.8413 26.8584 26.7661 27.9275 25.3633 28.4868C23.2628 29.3152 18.2784 29.124 15.9571 29.124C13.6358 29.124 8.6443 29.3081 6.55086 28.4868C5.15524 27.9346 4.08004 26.8655 3.51751 25.4707C2.68441 23.3821 2.87667 18.426 2.87667 16.1179C2.87667 13.8098 2.69153 8.84668 3.51751 6.76514C4.07292 5.37744 5.14812 4.30835 6.55086 3.74902C8.65142 2.92065 13.6358 3.11182 15.9571 3.11182C18.2784 3.11182 23.2699 2.92773 25.3633 3.74902C26.7589 4.30127 27.8341 5.37036 28.3967 6.76514C29.2298 8.85376 29.0375 13.8098 29.0375 16.1179C29.0375 18.426 29.2298 23.3892 28.3967 25.4707Z"
                    fill="#0E0E0E"
                    className="fill-skin-socials"
                  />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/StrongHeartsCats"
                target="_blank"
              >
                <svg
                  role="img"
                  aria-label="Facebook link to Strong Hearts Cat Rescue"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.3515 16.125C32.3515 7.58927 25.4357 0.673447 16.8999 0.673447C8.36418 0.673447 1.44836 7.58927 1.44836 16.125C1.44836 23.8371 7.09878 30.2295 14.4856 31.3897V20.5916H10.5604V16.125H14.4856V12.7207C14.4856 8.84844 16.7909 6.70952 20.3217 6.70952C22.0126 6.70952 23.7809 7.01108 23.7809 7.01108V10.8117H21.832C19.913 10.8117 19.3142 12.0029 19.3142 13.2247V16.125H23.5996L22.9142 20.5916H19.3142V31.3897C26.7011 30.2295 32.3515 23.8371 32.3515 16.125Z"
                    fill="#0E0E0E"
                    className="fill-skin-socials"
                  />
                </svg>
              </a>
            </div>
          }
          collage={dogCollage}
        />
        <div></div>
      </article>
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
            fill="#0F0F0F"
            className="fill-skin-divider"
          />
        </svg>
      </div>
      <div className="w-[100vw] bg-skin-bgsecondary">
        <AdoptCarousel
          fetchQuery={"&species=Dog"}
          viewAllQuery={"?selected=Dog"}
        />
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
            fill="#0F0F0F"
            className="fill-skin-divider"
          />
        </svg>
      </div>
      <div>
        <GetInvolvedSection
          card1Title={"Adopt"}
          card1Blurb={
            "Adopting a dog is a life-changing experience that not only brings joy and companionship but also saves a life. By adopting one of our dogs you create space for another kill-listed life to come into our care. Adopt a dog today and make a difference in both your lives!"
          }
          card1Img={dogAdopt}
          card2Title={"Foster"}
          card2Blurb={
            "Fostering a dog is a rewarding experience that takes dedication and love. Our foster carers receive plenty of support and advice as they join our great community striving for the same goal. No prior experience is needed to become a foster carer, just a home and love to give. Join us today!"
          }
          card2Img={dogFoster}
          card3Title={"Donate"}
          card3Blurb={
            "Your donation can help us continue to do what we do best - saving lives. Your contribution can make a significant difference in the lives of our canine friends. Please donate today and help us continue our mission of providing a safe and nurturing environment for dogs in need"
          }
          card3Img={dogDonate}
        />
      </div>
    </main>
  );
}
