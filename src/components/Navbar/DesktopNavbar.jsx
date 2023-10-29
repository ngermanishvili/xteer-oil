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
        borderRadius: "15px",
        position: "fixed",
        top: isNavVisible ? "4%" : "-100px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        zIndex: 1000,
        transition: "top 0.3s",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      variant="gradient"
      color="dark"
      shadow="sm"
      transparent="true"
      py={0.25}
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
        relative
        light
        center
        transparent={true}
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
