import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import gentoLogo from "../../../assets/LOGO.png";
import { searchStore } from "../../../zustand/searchStore";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeBugerMenu = () => setIsMenuOpen(false);
  const setSearchQuery = searchStore((state) => state.setSearchQuery);

  const navLinks = {
    links: [
      { content: "მთავარი", linkTo: "/" },
      { content: "ჩვენ შესახებ", linkTo: "/about" },
      { content: "კონტაქტი", linkTo: "/contact" },
      { content: "პროდუქტი", linkTo: "find-my-oil" },
    ],
  };
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/* Mobile Menu Toggle Button */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      {/* Mobile Logo */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link to="/" onClick={() => setSearchQuery("")}>
            <img src={gentoLogo} alt="gentologo" />
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            🇬🇪
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
        }}
      >
        {navLinks.links.map((item, index) => {
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link to={item.linkTo} size="lg" onClick={closeBugerMenu}>
                {item.content}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
