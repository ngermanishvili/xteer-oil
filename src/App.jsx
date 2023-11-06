import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {useState, useEffect, Suspense} from "react";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import Footer from "./components/Footer/Footer";
import routes from "./routes";
import styled from "styled-components";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

const App = () => {
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
