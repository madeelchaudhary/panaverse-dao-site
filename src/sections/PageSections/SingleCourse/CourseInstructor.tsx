"use client";

import Section from "@/src/components/Section";
import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  BsChevronRight,
  BsFacebook,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

const CourseInstructor = () => {
  return (
    <Section title="Meet Your Instructors" text="" titleId="instructor">
      <Grid
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        mt="12"
        gap="8"
      >
        {Array.from({ length: 3 }).map((elem, i) => (
          <Box
            key={i}
            borderRadius="lg"
            maxW="sm"
            as="article"
            p="4"
            boxShadow="0 0.2rem 1rem 0 rgba(45, 45 , 45, 0.15)"
            bgColor="white"
          >
            <Box borderRadius="md" overflow="hidden">
              <Image
                objectFit="cover"
                objectPosition="top"
                maxH="260px"
                w="100%"
                alt=""
                src={`/images/review_${i + 1}.jpg`}
              ></Image>
            </Box>
            <VStack align="normal" py="6" gap="2">
              <Box>
                <Heading mb="2" fontSize="2xl">
                  John Doe
                </Heading>
                <Text fontSize="sm">Senior Software Developer</Text>
              </Box>
              <Text>
                Working as a senior software developer for many years and has
                worked for some of the top companies in the world.
              </Text>
              <HStack fontSize="xl" gap="2">
                <Link href="#" isExternal>
                  <BsGithub />
                </Link>
                <Link href="#" isExternal>
                  <BsLinkedin />
                </Link>
                <Link href="#" isExternal>
                  <BsFacebook />
                </Link>
              </HStack>
              <Link
                color="accent"
                fontWeight="semibold"
                href="#"
                isExternal
                display="inline-flex"
                alignItems="center"
                gap="2"
              >
                Exlpore More <BsChevronRight />
              </Link>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Section>
  );
};

export default CourseInstructor;
