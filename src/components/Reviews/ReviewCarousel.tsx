"use client";

import { useRef } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import ReviewItem from "./ReviewItem";
import ShadowCard from "../UI/Card/ShadowCard";
import { IconType } from "react-icons/lib";
const DUMMY_REVIEW = {
  title: "Best Course of my life",
  desc: "Panaverse is a great way to learn about emerging technologies. The courses are fun and engaging, and the instructors are knowledgeable in their fields.",
  avatar: "/images/review_",
  avatarType: "jpg",
  name: "John Doe",
  job: "Student",
};

const SlideChangeBtn = ({
  onClick,
  icon,
}: {
  onClick(): void;
  icon: IconType;
}) => {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      w="14"
      h="14"
      borderRadius="full"
      fontSize="2xl"
      color="white"
      filter="invert(0.3)"
      borderColor="currentColor"
      _hover={{
        bgColor: "gray.50",
        filter: "none",
        "& > *": { color: "blackAlpha.500" },
      }}
    >
      <Icon as={icon} />
    </Button>
  );
};

const ReviewCarousel = () => {
  const prevBtnRef: any = useRef();
  const nextBtnRef: any = useRef();

  const prevSlideHandler = () => {
    prevBtnRef.current.click();
  };
  const nextSlideHandler = () => {
    nextBtnRef.current.click();
  };

  return (
    <Box
      as="section"
      bgColor="#f5db6d"
      pos="relative"
      py={{ base: "24", lg: "28" }}
    >
      <Container maxW="container.xl">
        <HStack mt="10" justify="space-between">
          <Box>
            <Heading
              as="h2"
              color="headText"
              fontWeight="900"
              fontSize={{ base: "4xl", md: "5xl" }}
              mb=".3em"
            >
              Top Students Feedback
            </Heading>
            <Text
              pb={"10"}
              width="fit-content"
              borderBottom="1px"
              borderColor="blackAlpha.300"
            >
              Watch out what our top students say about our courses!
            </Text>
          </Box>
          <Box
            alignSelf="start"
            pos={{ base: "absolute", md: "static" }}
            bottom="20"
            left="50%"
            transform="translateX(-50%)"
          >
            <ButtonGroup>
              <SlideChangeBtn onClick={prevSlideHandler} icon={BsArrowLeft} />
              <SlideChangeBtn onClick={nextSlideHandler} icon={BsArrowRight} />
            </ButtonGroup>
          </Box>
        </HStack>
      </Container>
      <Box mt="14" pb={{ base: "10", md: "2" }}>
        <Splide
          hasTrack={false}
          options={{
            pagination: false,
            fixedWidth: "550px",
            gap: "2rem",
            rewind: true,
            breakpoints: {
              600: {
                fixedWidth: "calc(100vw - 1rem)",
                gap: "2.5rem",
              },
              800: {
                fixedWidth: "450px",
              },
              1200: {
                fixedWidth: "500px",
              },
            },
          }}
        >
          <SplideTrack>
            {Array.from({ length: 4 }).map((elem, i) => (
              <SplideSlide key={i}>
                <ReviewItem
                  CustomCard={ShadowCard}
                  item={DUMMY_REVIEW}
                  bgColor={"gray.50"}
                  num={i + 1}
                  cardStyles={{ h: "full", minW: "270px", px: "8", py: "10" }}
                />
              </SplideSlide>
            ))}
          </SplideTrack>

          <Box className="splide__arrows">
            <button
              ref={prevBtnRef}
              className="splide__arrow splide__arrow--prev"
            ></button>
            <button
              ref={nextBtnRef}
              className="splide__arrow splide__arrow--next"
            ></button>
          </Box>
        </Splide>
      </Box>
    </Box>
  );
};

export default ReviewCarousel;
