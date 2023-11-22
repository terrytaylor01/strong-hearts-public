import React from "react";
import farmLogo from "../assets/farm-sanct.png";
import menuIcon from "../assets/menu_icon.svg";
import CustomLink from "./CustomLink";
import IconLink from "./IconLink";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import MobileNavLinkDropdown from "./MobileNavLinkDropdown";

export default function Navbar({ setTheme }) {
  const theme = React.useContext(ThemeContext);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.windowWidth);

  function openNav() {
    setNavbarOpen((prevNav) => !prevNav);
    console.log(navbarOpen);

    if (!navbarOpen) {
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100%";
      document.documentElement.style.overflowY = "hidden";
      document.documentElement.style.height = "100%";
    } else {
      console.log("else");
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    }
  }

  function clickLink() {
    openNav();
    document.querySelector("body").scrollTo(0, 0);
  }

  function scrollToTopNav() {
    document.body.scrollTo(0, 0);
  }

  React.useEffect(() => {
    const onResize = (e) => {
      setWindowWidth(e.target.innerWidth);
    };
    window.addEventListener("resize", onResize);

    if (windowWidth > 1024) {
      if (navbarOpen) {
        openNav();
      }
    }

    return () => window.removeEventListener("resize", onResize);
  }, [windowWidth]);

  return (
    <>
      <nav
        className={
          theme +
          " sticky top-0 z-[1000] flex w-[100vw] flex-row items-center justify-center bg-skin-bgprimary p-4 px-8 font-inter lg:relative lg:px-14 lg:py-8 lg:backdrop-blur-none"
        }
      >
        {/* logo section */}
        <IconLink
          to={"/"}
          className="mr-auto flex items-center gap-4"
          bg="#fdfffd"
          theme="theme-home"
          setTheme={setTheme}
        >
          <img
            src={farmLogo}
            className="h-[62px]"
            alt="Strong Hearts Farm Sanctuary Logo"
          ></img>
          <h1 className="hidden text-xl font-light tracking-tighter xl:block">
            Strong Hearts Sanctuary
          </h1>
        </IconLink>
        {/* links */}

        <div className="z-[1000] hidden gap-0 lg:flex lg:items-center 2xl:gap-4 [&>div>div>*]:text-center">
          <div className="group relative h-10">
            <CustomLink
              to="/farmedanimals"
              className="z-50 flex h-10 w-32 items-center justify-center text-center text-[14px] tracking-tight transition-all hover:tracking-wide"
              bg="white"
              theme="theme-farm"
              setTheme={setTheme}
            >
              Farmed Animals
            </CustomLink>
            <span className=" invisible absolute left-1/2 z-[1000] flex w-[150px] -translate-x-1/2 transform flex-col gap-2 rounded-2xl p-3 py-4 font-inter text-[14px] text-white opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
              <div className=" flex w-[100%] flex-col gap-2 rounded-2xl bg-skin-textprimary py-3 text-center shadow-md">
                <Link
                  to="/farmedanimals/adopt"
                  className="hover:tracking-wide "
                >
                  Adopt
                </Link>
                <Link
                  to="/farmedanimals/volunteer"
                  className="hover:tracking-wide "
                >
                  Volunteer
                </Link>
                <Link
                  to="/farmedanimals/stories"
                  className="hover:tracking-wide "
                >
                  Stories
                </Link>
                <Link
                  to="/listing?selected=farmed"
                  className="hover:tracking-wide "
                >
                  Up for Adoption
                </Link>
              </div>
            </span>
          </div>
          <div className="group relative">
            <CustomLink
              to="/cats"
              className="flex h-10 w-24 items-center justify-center text-center text-[14px] tracking-tight transition-all hover:tracking-wide"
              bg="#FFFAF5"
              theme="theme-cats"
              setTheme={setTheme}
            >
              Cats
            </CustomLink>
            <span className="invisible absolute left-1/2 flex w-[150px] -translate-x-1/2 transform flex-col gap-2 rounded-2xl p-3 py-4 font-inter text-[14px] text-white opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
              <div className="flex w-[100%]  flex-col gap-2 rounded-2xl  bg-skin-textprimary py-3 text-center shadow-md">
                <Link to="/cats/adopt" className="hover:tracking-wide">
                  Adopt
                </Link>
                <Link to="/cats/foster" className="hover:tracking-wide">
                  Foster
                </Link>
                <Link
                  to="/listing?selected=Cat"
                  className="hover:tracking-wide "
                >
                  Up for Adoption
                </Link>
              </div>
            </span>
          </div>
          <div className="group relative">
            <CustomLink
              to="/dogs"
              className="flex h-10 w-24 items-center justify-center text-center text-[14px] tracking-tight transition-all hover:tracking-wide"
              bg="#EAF9FF"
              theme="theme-dogs"
              setTheme={setTheme}
            >
              Dogs
            </CustomLink>
            <span className="invisible absolute left-1/2 flex w-[150px] -translate-x-1/2 transform flex-col gap-2 rounded-2xl p-3 py-4 font-inter text-[14px] text-white opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
              <div className="flex w-[100%]  flex-col gap-2 rounded-2xl  bg-skin-textprimary py-3 text-center shadow-md">
                <Link to="/dogs/adopt" className="hover:tracking-wide">
                  Adopt
                </Link>
                <Link to="/dogs/foster" className="hover:tracking-wide">
                  Foster
                </Link>
                <Link
                  to="/listing?selected=Dog"
                  className="hover:tracking-wide "
                >
                  Up for Adoption
                </Link>
              </div>
            </span>
          </div>
          <div className="group relative">
            <CustomLink
              to="/buns"
              className="flex h-10 w-24 items-center justify-center text-center text-[14px] tracking-tight transition-all hover:tracking-wide"
              bg="#FBF5FF"
              theme="theme-buns"
              setTheme={setTheme}
            >
              Rabbits
            </CustomLink>
            <span className="invisible absolute left-1/2 flex w-[150px] -translate-x-1/2 transform flex-col gap-2 rounded-2xl p-3 py-4 font-inter text-[14px] text-white opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
              <div className="flex w-[100%]  flex-col gap-2 rounded-2xl  bg-skin-textprimary py-3 text-center shadow-md">
                <Link to="/buns/adopt" className="hover:tracking-wide">
                  Adopt
                </Link>
                <Link to="/buns/foster" className="hover:tracking-wide">
                  Foster
                </Link>
                <Link
                  to="/listing?selected=Rabbit"
                  className="hover:tracking-wide "
                >
                  Up for Adoption
                </Link>
              </div>
            </span>
          </div>
          <div>
            <CustomLink
              to="/adoptiondays"
              className="flex h-10 w-28 items-center justify-center text-center text-[14px] tracking-tight transition-all hover:tracking-wide"
              theme="theme-home"
              setTheme={setTheme}
            >
              Adoption Days
            </CustomLink>
          </div>
          <div>
            <CustomLink
              to="/contact"
              className="flex h-10 w-24 items-center justify-center text-center text-[14px] tracking-tight transition-all hover:tracking-wide"
              theme="theme-home"
              setTheme={setTheme}
            >
              Contact
            </CustomLink>
          </div>
          <div>
            <a
              href="https://www.strongheartscats.com/shop"
              target="_blank"
              className="flex h-14 w-24 items-center justify-center text-[14px] tracking-tight transition-all hover:tracking-wide"
            >
              Shop
            </a>
          </div>
          <div className="h-14 rounded-2xl bg-skin-textprimary text-white shadow-md transition-all hover:scale-105 ">
            <Link
              to={"/donate"}
              className="flex h-14 w-24 items-center justify-center text-[14px] tracking-tight   hover:tracking-wide"
            >
              Donate
            </Link>
          </div>
        </div>

        <button
          className="mr-16 h-12 flex-grow  lg:hidden"
          onClick={scrollToTopNav}
        />

        {/* mobile navbar / hamburger menu */}
        <div
          className="absolute right-6 z-50 ml-auto w-12 cursor-pointer lg:hidden"
          onClick={openNav}
        >
          <i>
            <svg
              className={` aspect-square h-10 fill-skin-socials transition-transform ${
                navbarOpen ? "rotate-90 transform" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              viewBox="0 -960 960 960"
              width="100%"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </i>
        </div>
      </nav>
      {/* Mobile nav menu */}
      <div className={"fixed z-50"}>
        <div
          className={`${theme} absolute z-20 h-fit w-[100vw] overflow-y-scroll bg-skin-footer text-white opacity-90 transition-transform duration-[400ms] ease-out lg:hidden ${
            navbarOpen ? "-translate-x-0" : " translate-x-[110%]"
          }`}
        >
          <div className="flex  h-screen flex-col gap-1 pt-10   font-inter text-3xl font-light [&>*]:text-center [&>.link]:text-lg [&>.link]:font-bold [&>button]:tracking-tight ">
            <MobileNavLinkDropdown
              linkTo={"/farmedanimals"}
              clickLink={clickLink}
              text={"Farmed"}
            >
              <ul className="mt-2 flex flex-col items-center justify-center gap-1 text-center text-base">
                <Link to="/farmedanimals/adopt" onClick={clickLink}>
                  Adopt
                </Link>
                <Link to="/farmedanimals/volunteer" onClick={clickLink}>
                  Volunteer
                </Link>
                <Link to="/farmedanimals/stories" onClick={clickLink}>
                  Stories
                </Link>
              </ul>
            </MobileNavLinkDropdown>
            <MobileNavLinkDropdown
              linkTo={"/cats"}
              clickLink={clickLink}
              text={"Cats"}
            >
              <ul className="mt-2 flex flex-col items-center justify-center gap-1 text-center text-base">
                <Link to="/cats/adopt" onClick={clickLink}>
                  Adopt
                </Link>
                <Link to="/cats/foster" onClick={clickLink}>
                  Foster
                </Link>
              </ul>
            </MobileNavLinkDropdown>

            <MobileNavLinkDropdown
              linkTo={"/dogs"}
              clickLink={clickLink}
              text={"Dogs"}
            >
              <ul className="mt-2 flex flex-col items-center justify-center gap-1 text-center text-base">
                <Link to="/dogs/adopt" onClick={clickLink}>
                  Adopt
                </Link>
                <Link to="/dogs/foster" onClick={clickLink}>
                  Foster
                </Link>
              </ul>
            </MobileNavLinkDropdown>

            <MobileNavLinkDropdown
              linkTo={"/buns"}
              clickLink={clickLink}
              text={"Buns"}
            >
              <ul className="mt-2 flex flex-col items-center justify-center gap-1 text-center text-base">
                <Link to="/buns/adopt" onClick={clickLink}>
                  Adopt
                </Link>
                <Link to="/buns/foster" onClick={clickLink}>
                  Foster
                </Link>
              </ul>
            </MobileNavLinkDropdown>

            <div className="my-3 flex flex-col gap-3">
              <Link
                to={"/adoptiondays"}
                className="text-base font-bold"
                onClick={clickLink}
              >
                Adoption Days
              </Link>
              <Link
                to="/contact"
                className="text-base font-bold"
                onClick={clickLink}
              >
                Contact
              </Link>
              <Link
                to="/listing"
                className="text-base font-bold"
                onClick={clickLink}
              >
                Animal Listings
              </Link>
              <a
                href="https://www.strongheartscats.com/shop"
                target="_blank"
                className=" text-base font-bold"
                onClick={clickLink}
              >
                Shop
              </a>
              <Link
                to={"/donate"}
                className="text-base font-bold"
                onClick={clickLink}
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${theme} absolute z-10 h-[100vh] w-[100vw] backdrop-blur-sm transition-transform duration-[400ms] ease-out lg:hidden ${
            navbarOpen ? "-translate-x-0" : " translate-x-[110%]"
          }`}
        ></div>
      </div>
    </>
  );
}
