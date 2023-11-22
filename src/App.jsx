import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

const FarmAdopt = React.lazy(() => import("./Pages/FarmAdopt.jsx"));
const PageSkeleton = React.lazy(() =>
  import("./components/skeletons/PageSkeleton.jsx"),
);
const AdoptionDaysPage = React.lazy(() =>
  import("./Pages/AdoptionDaysPage.jsx"),
);
const FarmedStoryPage = React.lazy(() => import("./Pages/FarmedStoryPage.jsx"));
const PoliciesPage = React.lazy(() => import("./Pages/PoliciesPage.jsx"));
const ErrorPage = React.lazy(() => import("./Pages/ErrorPage.jsx"));
const SupportersPage = React.lazy(() => import("./Pages/SupportersPage.jsx"));
const DonatePage = React.lazy(() => import("./Pages/DonatePage.jsx"));
const FarmPage = React.lazy(() => import("./Pages/FarmPage"));
const FarmVolunteer = React.lazy(() => import("./Pages/FarmVolunteer.jsx"));
const CatPage = React.lazy(() => import("./Pages/CatPage"));
const CatAdopt = React.lazy(() => import("./Pages/CatAdopt"));
const Home = React.lazy(() => import("./Pages/Home"));
const DogPage = React.lazy(() => import("./Pages/DogPage"));
const BunPage = React.lazy(() => import("./Pages/BunPage"));
const CatFoster = React.lazy(() => import("./Pages/CatFoster"));
const DogFoster = React.lazy(() => import("./Pages/DogFoster"));
const Footer = React.lazy(() => import("./components/Footer"));
const BunFoster = React.lazy(() => import("./Pages/BunFoster"));
const DogAdopt = React.lazy(() => import("./Pages/DogAdopt"));
const BunAdopt = React.lazy(() => import("./Pages/BunAdopt"));
const ContactPage = React.lazy(() => import("./Pages/ContactPage"));
const AnimalProfile = React.lazy(() => import("./Pages/AnimalProfile"));
const ListingPage = React.lazy(() => import("./Pages/ListingPage"));

/*TODO:


BEFORE DEPLOYMENT:
  - Forms on Formspark have to be set up to real emails, accounts migrated etc.
  - MAKE SURE ALL PAGES HAVE SCROLL TO TOP

- HOST CAT ONBOARDING DOC

- Adopt pages need to have right jotform on adoption application

- Change gallery implementation (find better lbirary)

- Shop???

3. Run lighthouse, fix problems

5. ensure all links in mobile and footer work, make sure all mobile links close nav menu on click





*/
export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = React.useState();

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Navbar setTheme={setTheme} />
        <div className="container relative">
          <React.Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/policies" element={<PoliciesPage />} />
              <Route path="/supporters" element={<SupportersPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/farmedanimals" element={<FarmPage />} />
              <Route path="/adoptiondays" element={<AdoptionDaysPage />} />
              <Route
                path="/farmedanimals/volunteer"
                element={<FarmVolunteer />}
              />
              <Route path="/farmedanimals/adopt" element={<FarmAdopt />} />
              <Route
                path="/farmedanimals/stories"
                element={<FarmedStoryPage />}
              />
              <Route path="/cats" element={<CatPage />} />
              <Route path="/cats/foster" element={<CatFoster />} />
              <Route path="/cats/adopt" element={<CatAdopt />} />
              <Route path="/dogs" element={<DogPage />} />
              <Route path="/dogs/foster" element={<DogFoster />} />
              <Route path="/dogs/adopt" element={<DogAdopt />} />
              <Route path="/buns" element={<BunPage />} />
              <Route path="/buns/foster" element={<BunFoster />} />
              <Route path="/buns/adopt" element={<BunAdopt />} />
              <Route
                path="/listing/:listingId"
                element={<AnimalProfile setTheme={setTheme} />}
              />
              <Route path="/listing" element={<ListingPage />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </React.Suspense>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
