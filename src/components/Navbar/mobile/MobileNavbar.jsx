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
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function MobileNavbar() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["🌐"]));
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

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
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
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
              <DropdownItem key="GEO 🇬🇪">GEO 🇬🇪</DropdownItem>
              <DropdownItem key="EN 🇺🇸">EN 🇺🇸</DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
