"use client";
import NextLink from "next/link";
import {
  Box,
  Container,
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  HStack,
  Button,
  Circle,
  List,
  ListItem,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";

import {
  BsChevronRight,
  BsGlobe,
  BsCalendar3,
  BsPlayFill,
} from "react-icons/bs";
import SecondaryButton from "@/src/components/UI/Button/SecondaryBtn";

const CourseHeader = () => {
  return (
    <Box
      mb={{ base: "600px", md: "0" }}
      as="section"
      bgColor="primary"
      py={{ base: "16", lg: "20" }}
    >
      <Container maxW={{ base: "prose", md: "container.xl" }}>
        <Box
          pos="relative"
          display={{ md: "grid" }}
          gridTemplateColumns="50% 1fr"
        >
          <VStack align="normal" spacing="4" color="gray.50">
            <Box mb="6">
              <Breadcrumb
                color="accent"
                fontSize="sm"
                fontWeight="semibold"
                separator={<BsChevronRight color="gray.50" fontSize="15" />}
              >
                <BreadcrumbItem>
                  <BreadcrumbLink as={NextLink} href="/">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink as={NextLink} href="/courses">
                    Courses
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>Web3.0 & Metaverse</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
            <Heading
              as="h1"
              color="inherit"
              fontWeight="900"
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            >
              Web 3.0 and Metaverse Developer: Blockchain, DAOs, DAPPs and more
            </Heading>
            <Text>
              Learn all about web3 and metaverse the future of the web! This is
              a comprehensive course that teaches you the core concepts of
              blockchain technology, as well as how to apply them to build
              decentralized applications (DApps) and deploying smart contracts.
            </Text>
            <HStack fontSize="sm" spacing="8">
              <HStack align={"center"}>
                <BsCalendar3 />
                <Text>Up-to-date</Text>
              </HStack>
              <HStack align={"center"}>
                <BsGlobe />
                <Text>Urdu</Text>
              </HStack>
            </HStack>
          </VStack>

          <Box
            mb={{ base: "-600px", md: "0" }}
            pos={{ md: "absolute" }}
            right="0"
            w={{ md: "45%" }}
            maxW="450px"
            mt="12"
          >
            <Box boxShadow="2xl">
              <Box pos="relative">
                <Image
                  minH={{ md: "230px", lg: "260px" }}
                  w="full"
                  objectFit="cover"
                  src="/images/courses/web3_meta.jpg"
                  alt=""
                ></Image>
                <Box w="100%" h="full" top="0" left="0" pos="absolute">
                  <Button
                    w="full"
                    h="full"
                    bgColor="transparent"
                    _hover={{ bgColor: "whiteAlpha.100" }}
                    color="black"
                  >
                    <Circle size="16" bgColor="gray.50" boxShadow="xl">
                      <BsPlayFill fontSize="30" />
                    </Circle>
                  </Button>
                </Box>
              </Box>
              <Box py={{ base: "8", lg: "10" }} px="6" bgColor="white">
                <Box textAlign="center" mb={{ base: "8", lg: "10" }}>
                  <Heading mb="7" as="h3" fontSize="2xl" fontWeight="black">
                    Join 10,000+ other students!
                  </Heading>
                  <SecondaryButton
                    link="#"
                    external={false}
                    styles={{
                      color: "gray.50",
                      px: "20",
                      py: "4",
                      fontSize: "xl",
                    }}
                  >
                    Enroll Now!
                  </SecondaryButton>
                </Box>
                <Divider maxW="70%" mx="auto"></Divider>
                <Box mt="6">
                  <Text fontWeight="black" fontSize="md" mb="2">
                    This course includes:
                  </Text>
                  <List
                    spacing="1"
                    listStyleType="initial"
                    ml="8"
                    sx={{
                      "& li::marker": {
                        color: "secondary",
                      },
                    }}
                  >
                    <ListItem>Certificate of Completion</ListItem>
                    <ListItem>On demand video content</ListItem>
                    <ListItem>Live online classes</ListItem>
                    <ListItem>Community for every of you</ListItem>
                  </List>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CourseHeader;
