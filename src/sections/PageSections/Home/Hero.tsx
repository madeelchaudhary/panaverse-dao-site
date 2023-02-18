"use client";

import PrimaryButton from "@/src/components/UI/Button/PrimaryBtn";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box as="section">
      <Grid templateColumns={{ md: "auto auto", lg: "54% 46%" }}>
        <GridItem py="32" bgColor="primary">
          <Box display="flex" justifyContent={{ lg: "flex-end" }}>
            <VStack
              gap="7"
              px={{ base: "4", sm: "6" }}
              pr={{ lg: "min(5vw, 4.5rem)" }}
              maxW={{ sm: "prose", lg: "68ch" }}
              alignItems="normal"
            >
              <Heading
                as="h1"
                lineHeight="1.2"
                fontSize={{ base: "4xl", sm: "5xl", lg: "6xl", xl: "7xl" }}
                fontWeight="black"
                color="white"
              >
                Find your{" "}
                <Text as="span" color="accent">
                  perfect
                </Text>{" "}
                course & grow your{" "}
                <Text as="span" color="accent">
                  skill
                </Text>
              </Heading>
              <Text color="secondaryText">
                Panaverse is a community of ideas and technologies around Web
                3.0, Metaverse, and Edge Computing, with the purpose to create
                an ever-better world for all.
              </Text>
              <PrimaryButton
                link="/courses"
                external={false}
                styles={{
                  fontWeight: "bold",
                  px: "12",
                  py: "5",
                  maxW: { base: "auto", md: "fit-content" },
                  textAlign: "center",
                }}
              >
                Browse Courses
              </PrimaryButton>
            </VStack>
          </Box>
        </GridItem>
        <GridItem bgColor="accent" display="flex">
          <Box alignSelf={"end"} display={{ base: "none", md: "block" }}>
            <Image
              w="100%"
              minW="40"
              maxW="690px"
              src="/images/hero_1.png"
              alt=""
            ></Image>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HeroSection;
