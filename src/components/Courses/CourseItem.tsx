import NextLink from "next/link";
import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { BsClock, BsCheckCircle } from "react-icons/bs";
import { CourseStructure } from "@/types/courses";
import Card from "../UI/Card/Card";

const CourseItem = ({ course }: { course: CourseStructure }) => {
  return (
    <Card shadow="lg" styles={{ pos: "relative", bgColor: "white" }}>
      {course.learningCurve && (
        <HStack
          pos="absolute"
          py="5px"
          px="10px"
          color="white"
          fontSize={"xs"}
          fontWeight="bold"
          borderRadius="sm"
          top="3"
          right={"3"}
          bgColor={
            course.learningCurve === "Beginner"
              ? "whatsapp.500"
              : course.learningCurve === "Advanced"
              ? "pink.500"
              : "facebook.400"
          }
        >
          <Text>{course.learningCurve}</Text>
        </HStack>
      )}
      <Box>
        <Image
          minH={{ base: "220px" }}
          maxH={{ sm: "320px" }}
          h={{ md: "240px", lg: "250px" }}
          w="full"
          objectFit="cover"
          src={course.img}
          alt=""
        ></Image>
      </Box>
      <Box bgColor="white" py="8" px="6">
        <HStack gap="4" mb="4" fontSize="sm">
          <HStack align="center">
            <BsClock color="#f8b73c" />
            <Text>{course.duration}</Text>
          </HStack>
          <HStack align="center">
            <BsCheckCircle color="#f8b73c" />
            <Text>{course.lessons}</Text>
          </HStack>
        </HStack>
        <Heading as="h3" fontSize="xl" fontWeight="900" mb="2">
          {course.title}
        </Heading>
        <Text color="primary" fontSize=".95rem" mt="4">
          {course.desc}
        </Text>
        <ButtonGroup mt="5" w="full">
          <Button
            w="50%"
            variant="outline"
            borderColor="secondary"
            bgColor="secondary"
            color="gray.50"
            _hover={{ bgColor: "transparent", color: "headingText" }}
          >
            Watch Preview
          </Button>
          <Button
            as={NextLink}
            href={course.link}
            w="50%"
            variant="outline"
            borderColor="secondary"
            color="headingText"
            _hover={{ bgColor: "secondary", color: "gray.50" }}
          >
            Explore Course
          </Button>
        </ButtonGroup>
      </Box>
    </Card>
  );
};

export default CourseItem;
