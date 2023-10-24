import React, { useEffect, useState } from "react";
import MKBox from "../MKBox";
import DefaultNavbar from "../../components/examples/Navbars/DefaultNavbar";
import logoImage from "../../assets/images/examples/agrinol.png";
import { useTranslation } from "react-i18next";

function DesktopNavbar({ routes }) {
  const { t, i18n } = useTranslation();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Determine the scroll direction
      if (scrollTop > lastScrollTop) {
        // Scrolling down, hide the navbar
        setIsNavVisible(false);
      } else {
        // Scrolling up, show the navbar
        setIsNavVisible(true);
      }

      // Update the last scroll position
      setLastScrollTop(scrollTop);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <MKBox
      style={{
        borderRadius: "15px",
        position: "fixed",
        top: isNavVisible ? "4%" : "-100px", // Adjust the value as needed
        left: "50%",
        transform: "translateX(-50%)",
        width: "80%",
        zIndex: 1000,
        transition: "top 0.3s", // Add a smooth transition effect
      }}
      variant="gradient"
      color="dark"
      bgColor="dark"
      shadow="sm"
      transparent
      py={0.25}
      tra
    >
      <DefaultNavbar
        changeLanguage={changeLanguage}
        routes={routes.map((route) => ({
          ...route,
          name: t(route.name), // Translate the route name
          color: "#344767",
        }))}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        relative
        light
        center
      >
        <img
          src={logoImage}
          alt="Logo"
          style={{ width: "50px", height: "50px" }}
        />
      </DefaultNavbar>
    </MKBox>
  );
}

export default DesktopNavbar;
