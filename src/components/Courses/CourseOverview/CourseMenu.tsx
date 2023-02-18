"use client";

import { Box, Button, Container, Link, List, ListItem } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";

const LINKSTEXT = [
  "Prerequisites",
  "Overview",
  "Instructor",
  "Curriculum",
  "Reviews",
  "FAQs",
];

const CourseMenu = () => {
  return (
    <Box bgColor="purple.50" py={{ base: "5", lg: "0" }}>
      <Container maxW={{ base: "prose", md: "container.xl" }}>
        <Box as="nav" aria-label="Table of Contents">
          <Box
            pos="relative"
            maxW="fit-content"
            fontFamily="heading"
            fontWeight="bold"
            fontSize={{ lg: "sm", xl: "md" }}
            sx={{
              "&:hover ul": {
                transform: "scaleY(1)",
              },
            }}
          >
            <Button
              leftIcon={<BsList size="25" />}
              display={{ base: "flex", lg: "none" }}
              alignItems="center"
              variant="unstyled"
              fontSize="lg"
              p="0"
              sx={{
                "&:hover + ul, &:focus + ul": {
                  transform: "scaleY(1)",
                },
              }}
            >
              Explore Course
            </Button>
            <List
              pos={{ base: "absolute", lg: "static" }}
              left="0"
              top="100%"
              zIndex={{ base: "popover", lg: "auto" }}
              display={{ lg: "flex" }}
              gap={{ base: "8", lg: "4", xl: "10" }}
              alignItems="center"
              py={{ base: "8", lg: "0" }}
              spacing={{ base: "3", lg: "0" }}
              bgColor={{ base: "white", lg: "transparent" }}
              boxShadow={{ base: "lg", lg: "none" }}
              borderRadius="md"
              transformOrigin="top"
              transform={{ base: "scaleY(0)", lg: "none" }}
              transition="transform 80ms ease-in-out"
              sx={{
                "& a:hover, & a:focus": {
                  textDecor: "none",
                  borderColor: "secondary",
                },
              }}
            >
              {LINKSTEXT.map((item) => {
                return (
                  <ListItem key={item}>
                    <Link
                      px={{ base: "12", lg: "0" }}
                      py={{ lg: "8" }}
                      display="inline-block"
                      borderLeft={{ base: "4px solid", lg: "none" }}
                      borderBottom={{ lg: "4px solid transparent" }}
                      borderColor="transparent"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CourseMenu;
