"use client";

import Link from "../../UI/Navigation/Link";
import { Box, List, ListItem } from "@chakra-ui/react";

const NAV_LINKS = ["Home", "Courses", "Mentors", "About"];

const Navbar = ({
  navExpanded,
  onClickNavLink,
}: {
  navExpanded: boolean;
  onClickNavLink(): void;
}) => {
  const navStyles = navExpanded ? "scaleY(1)" : "scaleY(0)";

  return (
    <Box
      aria-expanded={navExpanded}
      as="nav"
      aria-label="Primary Navigation"
      ml="auto !important"
      pos={{ base: "absolute", md: "static" }}
      py={{ base: "16", md: "0" }}
      width={{ base: "full", md: "auto" }}
      bgColor={{ base: "headingText", md: "transparent" }}
      transformOrigin="top"
      transform={{ base: navStyles, md: "none" }}
      transition="transform 200ms ease-in-out"
      top="calc(2px + 100%)"
      left="0"
    >
      <List
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        gap={{ base: "10", md: "4", lg: "8" }}
      >
        {NAV_LINKS.map((item) => (
          <ListItem key={item}>
            <Link
              onClickHandler={onClickNavLink}
              link={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Navbar;
