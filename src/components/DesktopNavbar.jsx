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
        <p className="font-bold text-inherit">XTEER GEORGIA</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            გალერეა
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
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
              >
                პროდუქტი
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px] "
            itemClasses={{
              base: "gap-4",
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
            🇬🇪
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
