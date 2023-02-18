"use client";

import { Box, Container, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import PrimaryButton from "../../UI/Button/PrimaryBtn";
import CustomButton from "../../UI/Button/Button";
import Navbar from "./Navbar";
import { BsList, BsX } from "react-icons/bs";
import Link from "../../UI/Navigation/Link";

const Header = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  function toggleNav() {
    setNavExpanded((preValue) => !preValue);
  }

  function linkClickHandler() {
    if (window.matchMedia("(max-width: 49em)").matches) {
      setNavExpanded((preValue) => !preValue);
    }
  }

  return (
    <Box
      as="header"
      bgColor="headerBg"
      h={{ base: "16", md: "24" }}
      borderBottom={{ base: "2px solid", md: "2.5px solid" }}
      borderColor="whiteAlpha.200"
      pos="relative"
      zIndex="banner"
    >
      <Container maxW="container.xl" h="full">
        <VStack align="auto" justify="center" h="full">
          <HStack justify={{ base: "space-between", md: "normal" }}>
            <Text fontSize="2xl" fontWeight="900" fontFamily="heading">
              <Link
                styles={{
                  _hover: {
                    textDecoration: "none",
                  },
                }}
                link="/"
              >
                &lt;Panaverse/&gt;
              </Link>
            </Text>
            <Navbar
              navExpanded={navExpanded}
              onClickNavLink={linkClickHandler}
            />
            <HStack
              ml={"auto !important"}
              display={{ base: "none", md: "flex" }}
              spacing="5"
            >
              <CustomButton
                external={true}
                link="https://piaic.org"
                styles={{
                  display: { md: "none", lg: "block" },
                  color: "gray.50",
                  px: 0,
                  py: 0,
                }}
              >
                Sign in
              </CustomButton>
              <PrimaryButton
                external={true}
                link="https://piaic.org"
                styles={{ py: "3", px: "8", mb: "2" }}
              >
                Get Started
              </PrimaryButton>
            </HStack>
            <Button
              display={{ md: "none" }}
              aria-label="Navigation Toggler"
              variant="outline"
              color="gray.50"
              _hover={{ bgColor: "gray.500" }}
              px="3"
              onClick={toggleNav}
              fontSize="32"
            >
              {navExpanded ? <BsX /> : <BsList />}
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Header;
