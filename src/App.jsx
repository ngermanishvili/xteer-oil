import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import {
  Home,
  AboutUs,
  Comunication,
  Information,
  Product,
} from "./Pages/index";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <BrowserRouter>
      {/* Conditionally render the appropriate navigation based on screen size */}
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="communication" element={<Comunication />} />
        <Route path="information" element={<Information />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
