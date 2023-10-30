import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {useState, useEffect, Suspense} from "react";
import {useMediaQuery} from "react-responsive";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import MobileNavbar from "./components/Navbar/mobile/MobileNavbar";
import animationData from "./lotties/Animation.json";
import Footer from "./components/Footer/Footer";
import routes from "./routes";
import styled from "styled-components";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
// Import your route components (no need to import routes again)
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/ContactUs/Contact";
import ProductDetail from "./Pages/Product";
import OilProductsList from "./Pages/OilProductsList";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <BrowserRouter>
        <ScrollToTop />
        <>
          {/* Conditionally render the appropriate navigation based on screen size */}
          {<DesktopNavbar routes={routes} />}
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.route}
                path={route.route}
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    {route.element}
                  </Suspense>
                }
              />
            ))}
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </div>
  );
};

const SyncLoaderDiv = styled.div`
  width: "100%";
  height: "100vh";
  display: "flex";
  justify-content: "center";
  align-items: "center";
`;

export default App;
