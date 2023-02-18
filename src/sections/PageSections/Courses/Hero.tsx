"use client";

import PrimaryButton from "@/src/components/UI/Button/PrimaryBtn";
import ShadowCard from "@/src/components/UI/Card/ShadowCard";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box as="section" py={{ base: "24", md: "28" }}>
      <Container maxW="container.xl">
        <Box
          display="grid"
          gap="8"
          gridTemplateColumns={{ md: "auto auto" }}
          justifyContent="space-between"
        >
          <Box maxW={{ md: "68ch" }}>
            <Box as="header">
              <Heading
                as="h1"
                fontWeight="900"
                fontSize={{ base: "4xl", lg: "5xl" }}
                mb=".25em"
              >
                Panaverse Academy Courses
              </Heading>
              <Text fontSize="2xl">
                We offer an informative, engaging and hands-on learning
                experience. Our courses are designed to help anyone interested
                in emerging technologies get up to speed on the latest concepts
                and trends.
                {/* Our courses are designed to unlock the power of these
                technologies, while providing you with practical knowledge that
                can be applied to your own projects or businesses.
                As part of  this mission, we also want to help startups and organizations
                looking to incorporate these technologies into their business models.
                
                Our courses are designed to provide a foundational understanding of these technologies and prepare learners to apply them in their own projects. 
                */}
              </Text>
            </Box>
          </Box>
          <Box>
            <ShadowCard>
              <Box
                as="article"
                bgColor="gray.50"
                p="8"
                textAlign="center"
                maxW={{ md: "30ch" }}
              >
                <Text mb="8" fontWeight="semibold">
                  We encourage you to search our catalog and find an appropriate
                  course. Not sure what course to take?
                </Text>
                <PrimaryButton
                  link="//piaic.org"
                  external={true}
                  customShadow="4px 4px 0px 1px black"
                  styles={{
                    color: "white",
                    bgColor: "accent",
                  }}
                >
                  Find the right path
                </PrimaryButton>
              </Box>
            </ShadowCard>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
