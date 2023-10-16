import React, {useState, useEffect, Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import MobileNavbar from "./components/Navbar/mobile/MobileNavbar";
import FindMyOil from "./components/FindMyOil/FindMyOil";
import ProductDetail from "./Pages/Product";

import Lottie from "react-lottie";
import animationData from "./lotties/Animation.json";

import Footer from "./components/Footer/Footer";

// Your route components
const Home = React.lazy(() => import("./Pages/Home"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs"));
const Contact = React.lazy(() => import("./Pages/Contact"));

const App = () => {
  const isMobile = useMediaQuery({maxWidth: 768});
  const [isLoading, setIsLoading] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    // Simulate a 5-second delay before setting isLoading to false
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <BrowserRouter>
        {/* Conditionally render the loading screen or the app content */}
        {isLoading ? (
          <Lottie
            style={{marginTop: "10%"}}
            options={defaultOptions}
            height={400}
            width={400}
          />
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
                path="contact"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Contact />
                  </Suspense>
                }
              />
              <Route
                path="/product/:productId"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <ProductDetail />
                  </Suspense>
                }
              />
              <Route
                path="find-my-oil"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <FindMyOil />
                  </Suspense>
                }
              />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
