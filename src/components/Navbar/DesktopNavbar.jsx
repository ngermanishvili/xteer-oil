import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "../IconsNavbar/Icons.jsx";
import logo from "../../assets/LOGO.png";
import styled from "styled-components";
import { searchStore } from "../../zustand/searchStore.jsx";
import { Link } from "react-router-dom";

export default function DesktopNavbar() {
  const setSearchQuery = searchStore((state) => state.setSearchQuery);
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

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
            href="#"
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
            გალერეა
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="foreground"
            href="#"
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
          </Button>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  color: "rgba(102,102,102,0.85)",
                  lineHeight: "16px",
                }}
              >
                პროდუქტი
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px] "
            itemClasses={{
              base: "gap-2",
            }}
          >
            <DropdownItem
              to="/find-my-oil"
              key="autoscaling"
              description="ზეთები და მასალები მაღალი ხარისხით"
              startContent={icons.scale}
            >
              ზეთები
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="ტარიფები "
              startContent={icons.activity}
            >
              ფასები
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="რატომ უნდა აირჩიო Xteer?"
              startContent={icons.flash}
            >
              რატომ ჩვენ?
            </DropdownItem>

            <DropdownItem
              key="99_uptime"
              description="დაათვალიერეთ კატალოგები"
              startContent={icons.server}
            >
              კატალოგები
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/find-my-oil">კატალოგი</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            🇬🇪
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
