import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import logo from "../../assets/LOGO.png";
import styled from "styled-components";
import { searchStore } from "../../zustand/searchStore.jsx";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"; // Import the i18n object from your i18n.js file

export default function DesktopNavbar() {
  const { t } = useTranslation();

  const setSearchQuery = searchStore((state) => state.setSearchQuery);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["🌐"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Use the i18n object to change the language
  };

  return (
    <>
      <Wrapper>
        <Navbar className="relative" shouldHideOnScroll>
          <Link to="/" onClick={() => setSearchQuery("")}>
            <img src={logo} style={{ width: "90% " }} />
          </Link>
          <NavbarBrand style={{ marginRight: "200px" }}></NavbarBrand>
          <NavbarContent className="sm:flex gap-2 " justify="end">
            <NavbarItem>
              <Link
                className="linkStyle"
                color="foreground"
                to={"/"}
                aria-current="page"
                style={{
                  marginRight: "10px",
                  fontSize: "17px",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  color: "rgba(102,102,102,0.85)",
                  lineHeight: "2px",
                }}
              >
                {t("main")}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                to={"/about"}
                aria-current="page"
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  color: "rgba(102,102,102,0.85)",
                  lineHeight: "2px",
                }}
              >
                {t("aboutUs")}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                to={"/contact"}
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  color: "rgba(102,102,102,0.85)",
                  lineHeight: "16px",
                }}
              >
                {t("contact")}
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarItem>
            <Link
              style={{
                fontWeight: "900",
                color: "rgba(102,102,102,0.85)",
              }}
              to="/find-my-oil"
            >
              {t("catalog")}
            </Link>
          </NavbarItem>
          <NavbarContent justify="end">
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered" className="capitalize">
                    {selectedValue}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
                >
                  <DropdownItem
                    onClick={() => changeLanguage("geo")}
                    key="GEO 🇬🇪"
                  >
                    GEO LANGUAGE 🇬🇪
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => changeLanguage("en")}
                    key="EN 🇺"
                  >
                    RUS LANGUAGE 🇺
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {/* <button onClick={() => changeLanguage("en")}>English</button>
              <button onClick={() => changeLanguage("ru")}>Русский</button> */}
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </Wrapper>
    </>
  );
}

const Fonts = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap");
  font-family: "Cairo", sans-serif;
`;

const Wrapper = styled.div`
  .linkStyle {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: "-0.02em";
    text-transform: "uppercase";
    color: "rgba(102,102,102,0.85)";
    line-height: 16px;
  }
`;
