"use client";

import SecondaryButton from "@/src/components/UI/Button/SecondaryBtn";
import FeaturedCourseList from "@/src/components/Courses/FeaturedCourses/CourseList";

import { Box } from "@chakra-ui/react";
import { CourseStructure } from "@/types/courses";
import Section from "@/src/components/Section";

const Courses = ({ courses }: { courses: CourseStructure[] }) => {
  return (
    <Section
      title="Our most popular and demanded courses"
      text="Our courses are designed to help students succeed in the world of technology."
      sectionStyles={{ bgColor: "primary" }}
      titleStyles={{ color: "gray.50" }}
      textStyles={{ color: "secondaryText" }}
    >
      <FeaturedCourseList items={courses} />
      <Box mx="auto" mt="14" w="max">
        <SecondaryButton link="/courses" styles={{ color: "white" }}>
          Browse all Courses
        </SecondaryButton>
      </Box>
    </Section>
  );
};

export default Courses;
