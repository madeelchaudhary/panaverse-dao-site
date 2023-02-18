"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsCheck2 } from "react-icons/bs";

const LearningOutcomes = [
  "Object-Oriented Programming using TypeScript",
  "Serverless Cloud Cloud Apps and APIs using Next.js 13",
  "Cloud Development Kit (CDK) for Terraform",
  " Full-Stack Template and API Product Development",
  "Developing Smart Contracts and Web 3.0 Dapps",
  "Open Virtual and Augmented Metaverse Experiences",
];

const CourseOverview = () => {
  const [fullVisible, setFullVisible] = useState(false);

  return (
    <>
      <Box as="section" mt="16">
        <Container maxW="container.xl">
          <Box maxW={{ md: "65%", lg: "59%", xl: "58%" }}>
            <Heading id="overview" as="h2">
              Overview
            </Heading>
            <Box mt="5">
              <Text fontWeight="semibold" fontSize="lg" color="gray.700">
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0 and Metaverse experiences for the next
                generation of the internet by specializing in building worlds
                that merge the best of cutting-edge decentralized distributed
                blockchains with 3D metaverse client experiences.
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box as="section" mt="16">
        <Container maxW="container.xl">
          <Box maxW={{ md: "65%", lg: "59%", xl: "58%" }}>
            <Box
              w="fit-content"
              border="1px"
              borderColor="blackAlpha.500"
              px="5"
              py="8"
            >
              <Heading as="h2" fontSize="2xl">
                What You&apos;ll learn
              </Heading>
              <Box mt="8">
                <List
                  px="3"
                  display="flex"
                  flexWrap="wrap"
                  justifyContent={"space-between"}
                  gap="4"
                >
                  {LearningOutcomes.map((text, i) => {
                    return (
                      <ListItem
                        flexBasis="auto"
                        maxW={{
                          base: "auto",
                          sm: "240px",
                          md: "220px",
                          lg: "240px",
                          xl: "280px",
                        }}
                        key={i}
                      >
                        <HStack>
                          <ListIcon
                            color="accent"
                            fontSize="2xl"
                            alignSelf="flex-start"
                            as={BsCheck2}
                          />
                          <Text fontSize=".935rem">{text}</Text>
                        </HStack>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        as="section"
        aria-label="Detailed Overview of course"
        mt="12"
        sx={{
          "& a": {
            color: "secondary",
            textDecor: "underline",
          },
          "& a:hover": {
            color: "accent",
          },
        }}
      >
        <Container maxW="container.xl">
          <Box maxW={{ md: "65%", lg: "59%", xl: "58%" }}>
            <Box
              mb="10"
              pos="relative"
              h={fullVisible ? "auto" : "280px"}
              overflow="hidden"
              _after={{
                display: "block",
                content: '""',
                width: "100%",
                height: fullVisible ? "0" : "80px",
                position: "absolute",
                left: "0",
                bottom: "0",
                background:
                  "linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))",
              }}
            >
              <Box fontSize="lg" sx={{ "& p + p": { mt: "5" } }}>
                <p>
                  In this brand-new type of curriculum, students will learn how
                  to make money and boost exports in the classroom and will
                  begin doing so within six months of the program&apos;s
                  beginning. It resembles a cross between a corporate venture
                  and an educational project.
                </p>
                <p>
                  This curriculum is intended for beginners who want to learn
                  software development from the ground up. It is going to be a
                  fifteen-month-long hybrid program that includes both onsite
                  and online classes and is divided into five quarters of 13
                  weeks each. The emphasis will be on hands-on learning by
                  educating students to produce projects.
                </p>
                <p>
                  To accommodate everyone, courses will be held primarily on
                  weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It
                  employs <strong>a hybrid teaching format</strong>, with core
                  onsite classes complemented by online Zoom laboratories and
                  recorded videos.
                </p>
                <p>
                  Metaverse will make use of all aspects of modern technology,
                  including 3D, VR, AR, AI, blockchain, cloud and edge
                  computing, voice computing, ambient computing, and more.&nbsp;
                  <a
                    href="https://www.citivelocity.com/citigps/metaverse-and-money/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Citi stated
                  </a>{" "}
                  in a March 2022 research paper that the metaverse economy
                  might have a total addressable market of up to $13 trillion
                  and five billion people by 2030.
                </p>
                <p>
                  <strong>The Outcome for Participants of the Program</strong>
                </p>
                <p>
                  The graduates of this program will own products (Full-Stack
                  App Templates, AR and VR Experiences, and APIs) that are
                  marketed globally by the Panaverse DAO and, if they like, will
                  also be able to start off by offering services at a rate of
                  $50 per hour ($96,000 per year). This would give Pakistani
                  professionals and students{" "}
                  <strong>
                    a fantastic opportunity to better their financial situation
                  </strong>{" "}
                  while also giving the economy a much-needed boost by expanding
                  software exports.
                </p>
                <p>
                  The scope of Metaverse jobs is constantly increasing, and it
                  is estimated to grow multiple folds in a few years. Check out
                  the scope and skills required to be a Metaverse Developer by{" "}
                  <a
                    href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blockchain Council
                  </a>
                  .
                </p>
                <p>
                  <strong>Important articles to read</strong>
                </p>
                <p>
                  <a
                    href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Top 5 Metaverse jobs that will rule the future of tech
                    industry
                  </a>{" "}
                  by TECHGIG
                  <br />
                  <a
                    href="https://thedefiant.io/web3-soaring-salaries"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Web3 Salaries Soar to $750,000 for Rank-and-File Devs
                  </a>{" "}
                  by The Defiant
                </p>
                <p>
                  <em>Metaverse may be the next generation of the internet.</em>
                </p>
                <p>
                  <strong>
                    It&apos;s still very early days and things are changing fast
                    but if you want to be involved in this rapidly growing web3
                    world, then this course is your perfect first step.
                  </strong>
                </p>
              </Box>
            </Box>
            <Box textAlign={"center"}>
              <Button onClick={() => setFullVisible((preValue) => !preValue)}>
                {fullVisible ? "Show less" : "Show more"}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CourseOverview;
