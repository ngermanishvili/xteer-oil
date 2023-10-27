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
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <MKBox
      style={{
        position: "relative",
        width: "100%",
        zIndex: 1000,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
      variant="gradient"
      color="dark"
      shadow="sm"
      transparent
      py={0.25}
      tra
    >
      <DefaultNavbar
        changeLanguage={changeLanguage}
        routes={routes.map((route) => ({
          ...route,
          name: t(route.name),
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
