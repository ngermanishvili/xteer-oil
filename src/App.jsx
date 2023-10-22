import React, {useState, useEffect, Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import MobileNavbar from "./components/Navbar/mobile/MobileNavbar";
import OilProductsList from "./Pages/OilProductsList";
import ProductDetail from "./Pages/Product";
import {SyncLoader} from "react-spinners";

import Lottie from "react-lottie";
import animationData from "./lotties/Animation.json";

import Footer from "./components/Footer/Footer";
import styled from "styled-components";

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
              <Route index element={<Home />} />
              <Route
                path="about"
                element={
                  <Suspense
                    fallback={
                      <SyncLoaderDiv>
                        <SyncLoader size={18} color="dodgerblue" />
                      </SyncLoaderDiv>
                    }
                  >
                    <AboutUs />
                  </Suspense>
                }
              />
              <Route
                path="contact"
                element={
                  <Suspense
                    fallback={
                      <SyncLoaderDiv>
                        <SyncLoader size={18} color="dodgerblue" />
                      </SyncLoaderDiv>
                    }
                  >
                    <Contact />
                  </Suspense>
                }
              />
              <Route
                path="/product/:productId"
                element={
                  <Suspense
                    fallback={
                      <SyncLoaderDiv>
                        <SyncLoader size={18} color="dodgerblue" />
                      </SyncLoaderDiv>
                    }
                  >
                    <ProductDetail />
                  </Suspense>
                }
              />
              <Route
                path="find-my-oil"
                element={
                  <Suspense
                    fallback={
                      <SyncLoaderDiv>
                        <SyncLoader size={18} color="dodgerblue" />
                      </SyncLoaderDiv>
                    }
                  >
                    <OilProductsList />
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

const SyncLoaderDiv = styled.div`
  width: "100%";
  height: "100vh";
  display: "flex";
  justify-content: "center";
  align-items: "center";
`;

export default App;
