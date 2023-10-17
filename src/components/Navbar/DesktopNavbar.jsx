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

export default function DesktopNavbar() {
  const setSearchQuery = searchStore((state) => state.setSearchQuery);

  return (
    <Navbar className="absolute fixed ">
      <NavbarBrand>
        <Link to="/" onClick={() => setSearchQuery("")}>
          <img src={logo} style={{ width: "100%  " }} />
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
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
              lineHeight: "16px",
            }}
          >
            ჩვენ შესახებ
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
            კონტაქტი
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link to="/find-my-oil">კატალოგი</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="PRIMAR" href="#" variant="light" size="lg">
            🌐 EN
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

const Fonts = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap");
  font-family: "Cairo", sans-serif;
`;
