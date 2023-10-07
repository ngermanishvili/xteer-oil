import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import MobileNavbar from "./components/Navbar/mobile/MobileNavbar";
import LoadingScreen from "./components/LazyLoading/LazyLoading"; // Import the loading screen component
import FindMyOil from "./Pages/FindMyOil";

// Your route components
const Home = React.lazy(() => import("./Pages/Home"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs"));
const Comunication = React.lazy(() => import("./Pages/Comunication"));
const Information = React.lazy(() => import("./Pages/Information"));
const Product = React.lazy(() => import("./Pages/Product"));

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second delay before setting isLoading to false
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* Conditionally render the loading screen or the app content */}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Conditionally render the appropriate navigation based on screen size */}
          {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
          <Routes>
            {/* Use Suspense with fallback to show a loading indicator while components load */}
            <Route
              index
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AboutUs />
                </Suspense>
              }
            />
            <Route
              path="communication"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Comunication />
                </Suspense>
              }
            />
            <Route
              path="information"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Information />
                </Suspense>
              }
            />
            <Route
              path="product"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Product />
                </Suspense>
              }
            />
            <Route
              path="product/find-my-oil"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <FindMyOil />
                </Suspense>
              }
            />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
