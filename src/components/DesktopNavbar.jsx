import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
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
} from "./Icons.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";
import styled from "styled-components";
import Parralax from "./animate/parallax.jsx";

export default function DesktopNavbar() {
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
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <Fonts className="font-family: 'Cairo', sans-serif; text-inherit">
          GENTO TRADING
        </Fonts>
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
          <Link
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
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
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
          <Button as={Link} color="primary" href="#" variant="flat">
            კატალოგი
          </Button>
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