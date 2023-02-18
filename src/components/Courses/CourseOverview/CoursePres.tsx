"use client";

import {
  Box,
  Container,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const CoursePres = () => {
  return (
    <Box as="section" mt="20">
      <Container maxW="container.xl">
        <Heading id="prerequisites" as="h2">
          Prerequisites
        </Heading>
        <Box mt="4">
          <UnorderedList ml="10" spacing="1">
            <ListItem>Basic knowledge of web</ListItem>
            <ListItem>Basic understaning of HTML & CSS</ListItem>
            <ListItem>A little knowledge of JavaScript</ListItem>
          </UnorderedList>
        </Box>
      </Container>
    </Box>
  );
};

export default CoursePres;
