import React from "react";
import ListingCard from "../components/ListingCard";
import { ThemeContext } from "../App";
import ListingCardSkeleton from "../components/skeletons/ListingCardSkeleton";
import { useSearchParams } from "react-router-dom";

export default function ListingPage() {
  const [animalPrData, setAnimalPrData] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [loadingListings, setLoadingListings] = React.useState(false);
  const [qUrl, setQUrl] = React.useState("");
  const [activeSelection, setActiveSelection] = React.useState();
  const [activeSubQ, setActiveSubQ] = React.useState();

  const BASE_PETRESCUE_API_URL = "/api/listings?";

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedQuery = searchParams.get("selected");

  let preAnimal = "";

  if (selectedQuery) {
    if (
      selectedQuery == "Cat" ||
      selectedQuery == "Dog" ||
      selectedQuery == "Rabbit" ||
      selectedQuery == "farmed"
    ) {
      preAnimal = selectedQuery;
    } else {
      preAnimal = "";
    }
  }

  const theme = React.useContext(ThemeContext);

  const fetchListings = async () => {
    console.log("fetching");
    setLoadingListings(true);
    try {
      console.log("qurl = " + qUrl);
      const url = qUrl + "&page=" + currentPage;
      console.log(url);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Petrescue response was not ok");
      }

      const data = await response.json();
      setAnimalPrData(data.listings);
      setLoadingListings(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchMoreListings = async () => {
    console.log("fetching more");
    setLoadingListings(true);
    try {
      const url = qUrl + "&page=" + (currentPage + 1);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setCurrentPage((prevPage) => prevPage + 1);
      if (!response.ok) {
        throw new Error("Petrescue response was not ok");
      }

      const data = await response.json();
      console.log(data);

      setAnimalPrData((prevAnimalPrData) =>
        prevAnimalPrData.concat(data.listings),
      );
      setLoadingListings(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function changeQuery(queryAnimal) {
    console.log("change query clicked");
    setSearchParams({ selected: queryAnimal });
    setCurrentPage(1);
    if (queryAnimal == activeSelection) {
      setActiveSelection("");
      setQUrl(BASE_PETRESCUE_API_URL);
      setSearchParams();
    } else {
      setActiveSelection(queryAnimal);

      if (queryAnimal == "farmed") {
        setQUrl(BASE_PETRESCUE_API_URL + "&exclude_species=Cat,Dog,Rabbit");
        console.log(qUrl);
      } else {
        setQUrl(BASE_PETRESCUE_API_URL + "species=" + queryAnimal);
      }
    }
  }

  React.useEffect(() => {
    document.body.scrollTo(0, 0);
    changeQuery(preAnimal);
  }, []);

  React.useEffect(() => {
    console.log("qurl changed");
    fetchListings();
  }, [qUrl]);

  let listings = [];

  listings = animalPrData?.map((listing) => {
    var id = listing.id;
    var breed = listing.breeds_display;
    if (breed === "") {
    } else {
      breed = breed + " - ";
    }
    // const name =  listing.name.replace(/ .*/, "") ;
    var name = listing.name.split("-")[0];

    const species = listing.species_name;
    const gender =
      listing.gender.charAt(0).toUpperCase() + listing.gender.slice(1);
    const photo = listing.photos[0].large_340.replace(",w_340", "");
    const photos = listing.photos;
    return (
      <ListingCard
        key={id}
        id={id}
        name={name}
        breed={breed}
        photo={photo}
        photos={photos}
        gender={gender}
        species={species}
      />
    );
  });

  return (
    <main className={"theme-home flex w-screen justify-center font-inter"}>
      <article className="mx-[10%] my-12 flex min-h-[1500px] flex-col items-center">
        {loadingListings && <div class="spinner-1 absolute top-0"></div>}
        <div className="my-8 flex  w-full justify-between gap-10  px-5 text-center text-sm md:text-base">
          <div className="flex gap-10 font-light">
            <button
              className={
                (activeSelection == "farmed"
                  ? "bg-black text-white "
                  : "bg-transparent text-black ") +
                " rounded-3xl px-2 py-2 outline outline-2 outline-black transition-colors md:p-2"
              }
              onClick={() => changeQuery("farmed")}
            >
              Farmed Animals
            </button>
            <button
              className={
                (activeSelection == "Cat"
                  ? "bg-[#5c4b3b] text-white "
                  : "bg-transparent text-black ") +
                " rounded-3xl p-2 outline outline-2 outline-[#5c4b3b] transition-colors"
              }
              onClick={() => changeQuery("Cat")}
            >
              Cats
            </button>
            <button
              className={
                (activeSelection == "Dog"
                  ? "bg-[#3b485c] text-white "
                  : "bg-transparent text-black ") +
                " rounded-3xl p-2 outline outline-2 outline-[#3b485c] transition-colors"
              }
              onClick={() => changeQuery("Dog")}
            >
              Dogs
            </button>
            <button
              className={
                (activeSelection == "Rabbit"
                  ? "bg-[#644765] text-white "
                  : "bg-transparent text-black ") +
                " rounded-3xl p-2 outline outline-2 outline-[#644765] transition-colors"
              }
              onClick={() => changeQuery("Rabbit")}
            >
              Rabbits
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-4 md:gap-y-8">
          {listings ? (
            listings
          ) : (
            <>
              <ListingCardSkeleton /> <ListingCardSkeleton />
              <ListingCardSkeleton /> <ListingCardSkeleton />
              <ListingCardSkeleton /> <ListingCardSkeleton />
              <ListingCardSkeleton /> <ListingCardSkeleton />
              <ListingCardSkeleton /> <ListingCardSkeleton />
            </>
          )}
        </div>
        <div className="flex justify-center">
          {loadingListings ? (
            <p className="my-8 rounded-2xl p-4 text-center font-inter text-2xl">
              Loading Animals...
            </p>
          ) : animalPrData?.length % 50 === 0 ? (
            <button
              className="my-8 rounded-2xl bg-skin-viewall p-4 text-center font-inter text-2xl text-white shadow-md transition-transform hover:scale-105"
              onClick={fetchMoreListings}
            >
              {" "}
              Load more{" "}
            </button>
          ) : (
            <p className="my-8 rounded-2xl p-4 text-center font-inter text-2xl"></p>
          )}
        </div>
        <div></div>
      </article>
    </main>
  );
}
