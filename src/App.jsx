import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import MobileNavbar from "./components/Navbar/mobile/MobileNavbar";
import Lottie from "react-lottie";
import animationData from "./lotties/Animation.json";
import Footer from "./components/Footer/Footer";
import routes from "./routes";

// Import your route components (no need to import routes again)
const Home = React.lazy(() => import("./Pages/Home"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs/AboutUs"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const ProductDetail = React.lazy(() => import("./Pages/Product"));
const OilProductsList = React.lazy(() => import("./Pages/OilProductsList"));

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
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
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <BrowserRouter>
        {/* Conditionally render the loading screen or the app content */}
        {isLoading ? (
          <Lottie
            style={{ marginTop: "10%" }}
            options={defaultOptions}
            height={400}
            width={400}
          />
        ) : (
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
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
