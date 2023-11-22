import React from "react";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";
import GetInvolvedCard from "./GetInvolvedCard";

export default function GetInvolvedSection({
  card1Title,
  card1Blurb,
  card1Img,
  card2Title,
  card2Blurb,
  card2Img,
  card3Title,
  card3Blurb,
  card3Img,
}) {
  const theme = React.useContext(ThemeContext);

  
  let fosterVolunteerLink = "./foster";
  if (theme == "theme-farm") {
    fosterVolunteerLink = "./volunteer";
  }

  return (
    <>
      <div className="flex w-[100vw] flex-col items-center bg-farm-involved-background bg-left-bottom bg-no-repeat pb-24 text-center font-inter  text-skin-textprimary bg-blend-multiply ">
        <h1 className="py-12 text-4xl font-semibold ">Get involved!</h1>
        <div className="mx-8 flex flex-col gap-12 lg:grid lg:w-[80vw] lg:grid-cols-3 lg:justify-items-center lg:gap-4 ">
          <GetInvolvedCard
            blurb={card1Blurb}
            title={card1Title}
            img={card1Img}
            link={"./adopt"}
          />
          <GetInvolvedCard
            blurb={card2Blurb}
            title={card2Title}
            img={card2Img}
            link={fosterVolunteerLink}
          />
          <GetInvolvedCard
            blurb={card3Blurb}
            title={card3Title}
            img={card3Img}
            link={"/donate"}
          />
        </div>
      </div>
    </>
  );
}
