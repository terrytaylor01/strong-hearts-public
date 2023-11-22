import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../App";
import "react-image-gallery/styles/css/image-gallery.css";
import "../gallery.css";
import ImageGallery from "react-image-gallery";
import AnimalProfileSkeleton from "../components/skeletons/AnimalProfileSkeleton";

export default function AnimalProfile({ setTheme }) {
  const theme = React.useContext(ThemeContext);

  const BASE_PETRESCUE_API_URL_ID = "/api/listing/";

  let { listingId } = useParams();
  const [listingData, setListingData] = React.useState();

  const fetchListing = async () => {
    try {
      const response = await fetch(BASE_PETRESCUE_API_URL_ID + listingId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Petrescue response was not ok");
      }

      const data = await response.json();
      setListingData(data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  React.useEffect(() => {
    fetchListing();
  }, []);

  if (listingData) {
    var img = listingData.photos[0].xlarge_900.replace(",w_900", "");
    var photoObjects = listingData.photos.slice(0, 4);
    var animalName = listingData.name.split("-")[0];
    var description = listingData.personality;
    var dob = listingData.date_of_birth;
    var breed =
      listingData.breeds_display === ""
        ? listingData.species_name
        : listingData.breeds_display;
    console.log(breed);
    var cost = listingData.adoption_fee.replace("$", "");
    var id = listingData.id;
    var microchip = listingData.microchip_number;
    var postcode = listingData.postcode;

    if (listingData.species_name === "Cat") {
      setTheme("theme-cats");
    } else if (listingData.species_name === "Dog") {
      setTheme("theme-dogs");
    } else if (listingData.species_name === "Rabbit") {
      setTheme("theme-buns");
    } else {
      setTheme("theme-farm");
    }
  }

  var adjustedAge = "";

  console.log(photoObjects);

  var galPhotos = [];
  photoObjects?.map((photoObject) => {
    galPhotos.push({
      original: photoObject.xlarge_900.replace(",w_900", ""),
      thumbnail: photoObject.small_80.replace(",w_80", ""),
    });
  });
  console.log(galPhotos);

  if (dob) {
    var dateReorder = dob;
    var dateParts = dob.split("/");
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

    const getYear = (date) => date.getFullYear() - 1970;
    const timeBetweenDates = (date1, date2) => {
      const date = new Date(date1 - date2);
      return {
        years: getYear(date),
        months: date.getMonth(),
        days: date.getDay(),
      };
    };

    console.log(dateObject);
    console.log(Date.now());

    const adjustedDateObject = timeBetweenDates(
      Date.now(),
      Date.parse(dateObject),
    );

    adjustedAge =
      adjustedDateObject.months === 1
        ? adjustedDateObject.months + " month"
        : adjustedDateObject.months + " months";

    if (adjustedDateObject.years != 0) {
      adjustedAge =
        adjustedDateObject.years === 1
          ? adjustedDateObject.years + " year"
          : adjustedDateObject.years + " years " + adjustedAge;
    }

    console.log(adjustedAge);
  }

  return (
    <>
      <main
        className={
          theme +
          " flex w-screen items-center justify-center bg-skin-bgprimary font-inter text-skin-textprimary"
        }
      >
        {listingData && (
          <article className="mb-16 flex flex-col items-center drop-shadow-md lg:w-[80%] xl:w-[60%]">
            <h1 className="mb-20 text-6xl font-semibold ">{animalName}</h1>
            <div className="flex flex-col items-center justify-center">
              <div className="flex min-h-screen flex-col items-center gap-4 rounded-2xl bg-skin-bgsecondary p-10">
                <span className="listing-gallery -mt-24 max-w-[100%] drop-shadow-md md:w-[60%]">
                  {/* <img
                    className="aspect-[6/7] w-[100%] rounded-3xl object-cover"
                    src={img}
                    loading="lazy"
                  ></img> */}
                  <ImageGallery
                    items={galPhotos}
                    useTranslate3D={false}
                    autoPlay={false}
                    loading="lazy"
                    showNav={false}
                    showThumbnails={true}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    disableThumbnailScroll={true}
                    disableThumbnailSwipe={true}
                    showBullets={false}
                    lazyLoad={true}
                  />
                </span>
                <p className="my-4  whitespace-pre-wrap leading-9 text-skin-textsecondary md:text-2xl">
                  {description}
                </p>
                <p className="mb-10 text-left whitespace-pre-wrap leading-9 text-skin-textsecondary md:text-2xl">
                  {" "}
                  {`Our adoption policies can be found `}
                  <Link className="underline" to={"/policies"}>
                    here
                  </Link>
                </p>
                {microchip && (
                  <p className="pb-2 text-skin-textsecondary opacity-70">
                    {"MC: " + microchip}
                  </p>
                )}
              </div>
              <div className="-mt-10 flex w-[80%] flex-col items-center justify-start rounded-2xl bg-skin-profileabout px-10 py-8 text-2xl text-skin-textsecondary">
                <h2 className="mb-2 font-bold tracking-tight">About me:</h2>
                <div className="flex w-full grid-cols-2 grid-rows-3 flex-col items-start gap-2 text-base font-semibold md:grid md:aspect-[727/250] md:items-center md:gap-0 lg:text-2xl [&>span>svg]:min-w-[30px] [&>span>svg]:max-w-[30px] [&>span>svg]:lg:w-[55px]  [&>span>svg]:lg:max-w-[55px] ">
                  <span className="flex items-center gap-6">
                    <svg
                      className="aspect-square fill-skin-profile"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="100%"
                      height="100%"
                    >
                      <path d="M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c-35.3 0-64 28.7-64 64v71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1 0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4l0 0 0 0 .1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8l0 0 0 0 0 0 .1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9V288c0-35.3-28.7-64-64-64V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H256V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H128V176zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4V480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V394.6z" />
                    </svg>
                    <h2 className="justify-center">{adjustedAge}</h2>
                  </span>

                  <span className="flex items-center gap-6">
                    <svg
                      className="aspect-square  fill-skin-profile grow shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="100%"
                      height="100%"
                    >
                      <path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160 154.4c0-5.8 4.7-10.4 10.4-10.4h.2c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4h48c5 0 9.8-2.4 12.8-6.4l40-53.3c2-2.7 5.2-4.3 8.5-4.3h.2c5.8 0 10.4 4.7 10.4 10.4V272c0 53-43 96-96 96s-96-43-96-96V154.4zM216 288a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm96-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
                    </svg>
                    <h2 className="justify-center">{breed}</h2>
                  </span>

                  <span className="flex items-center gap-6">
                    <svg
                      width="100%"
                      height="100%"
                      className="aspect-square   fill-skin-profile"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    <h2 className="justify-center">
                      {postcode + ", Victoria"}
                    </h2>
                  </span>

                  <span className="flex items-center gap-6">
                    <svg
                      width="100%"
                      height="100%"
                      className="aspect-square  fill-skin-profile"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
                    </svg>
                    <h2 className="justify-center">{cost}</h2>
                  </span>

                  {listingData.species_name === "Cat" && (
                    <span className="flex items-center gap-6">
                      <svg
                        width="100%"
                        height="100%"
                        className="aspect-square  fill-skin-profile"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                      </svg>
                      <h2 className="justify-center">Indoors Only</h2>
                    </span>
                  )}
                  <span className="flex items-center gap-6">
                    <svg
                      width="100%"
                      height="100%"
                      className="aspect-square  fill-skin-profile"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm96 320h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM144 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                    </svg>
                    <h2 className="justify-center">{`PetRescue ID: ${id}`}</h2>
                  </span>
                </div>
              </div>
              <div className="mx-4 my-12 flex flex-col gap-12 md:w-[80%]">
                <a
                  href={"https://www.petrescue.com.au/listings/" + id}
                  className="md:just flex items-center justify-between rounded-2xl bg-[#5FA503] px-12 py-4 text-3xl font-semibold text-white transition-transform hover:scale-105 md:gap-10  lg:text-7xl "
                  target="_blank"
                >
                  <img
                    className="w-20"
                    src="https://d339b5nop2tkmp.cloudfront.net/assets/global/petrescue-icon-eee76f85a60ef55c4a1927667547b313a7c0e82042636edf73dce9c88f694885.svg"
                  />
                  <h1 className="ml-auto mr-auto text-center">ENQUIRE HERE!</h1>
                </a>
                {listingData.species_name === "Cat" && (
                  <a
                    href={"https://form.jotform.com/213521591519859"}
                    className="flex items-center justify-between gap-10 rounded-2xl bg-skin-footer px-12 py-4 text-3xl font-semibold text-white transition-transform hover:scale-105  lg:text-7xl"
                    target="_blank"
                  >
                    <h1 className="ml-auto mr-auto text-center">APPLY</h1>
                  </a>
                )}
                {listingData.species_name === "Dog" && (
                  <a
                    href={"https://form.jotform.com/211967846466875"}
                    className="flex items-center justify-between gap-10 rounded-2xl bg-skin-footer px-12 py-4 text-3xl font-semibold text-white transition-transform hover:scale-105  lg:text-7xl"
                    target="_blank"
                  >
                    <h1 className="ml-auto mr-auto text-center">APPLY</h1>
                  </a>
                )}
              </div>
            </div>
          </article>
        )}
        {!listingData && <AnimalProfileSkeleton />}
      </main>
    </>
  );
}
