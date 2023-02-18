"use client";

import PrimaryButton from "@/src/components/UI/Button/PrimaryBtn";
import { Box, Container, Grid, Heading, Image, Text } from "@chakra-ui/react";

const MoreAbout = () => {
  return (
    <Box as="section" py={{ base: "24", lg: "32" }}>
      <Container maxW="container.xl">
        <Grid templateColumns={{ md: "auto auto" }} rowGap="16" columnGap="12">
          <Box
            alignSelf="center"
            display="flex"
            flexDir="column"
            gap="6"
            maxW={{ md: "55ch" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              as="h2"
              fontWeight="900"
              fontSize={{ base: "4xl", lg: "5xl" }}
            >
              We have experienced & talented mentors
            </Heading>
            <Text mb="4">
              Our passionate mentors share their knowledge and expertise with
              you to help you achieve your goals. We teach our students
              everything they need to know that help them achieve their goals.
            </Text>
            <Text mb="4">
              The Panaverse learning philosophy is based around creating an
              environment where students can find their own way of learning
              while developing their self-confidence, independence and
              creativity.
            </Text>
            <PrimaryButton
              link="//piaic.org"
              external={true}
              customShadow="4px 4px 0 1px black"
              styles={{
                px: "12",
                textAlign: "center",
                w: { md: "fit-content" },
              }}
            >
              Get Started
            </PrimaryButton>
          </Box>
          <Box gridRow={{ base: "1", md: "auto" }}>
            <Image minW="60" src="/images/more-about.png" alt=""></Image>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default MoreAbout;
