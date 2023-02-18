"use client";

import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { CourseStructure } from "@/types/courses";
import CourseList from "../components/Courses/CourseList";
import Section from "../components/Section";

const AllCourses = ({ courses }: { courses: CourseStructure[] }) => {
  const [shownAll, setShownAll] = useState(false);

  function toggleCoursesLength() {
    setShownAll((preValue) => !preValue);
  }

  return (
    <Section
      title="Explore Our Courses"
      text=""
      titleStyles={{
        mb: "6",
        pos: "relative",
        w: "fit-content",
        mx: "auto",
        _after: {
          content: '""',
          pos: "absolute",
          top: "120%",
          left: "50%",
          transform: "translateX(-50%)",
          h: "1px",
          w: "80%",
          bgColor: "blackAlpha.200",
        },
      }}
    >
      <Box mt="16">
        <CourseList courses={courses.slice(0, shownAll ? courses.length : 3)} />
        <Box mt="8" textAlign="center">
          <Button
            onClick={toggleCoursesLength}
            variant="outline"
            borderColor={"accent"}
            colorScheme="green"
          >
            {shownAll ? "Show less" : "Load more"}
          </Button>
        </Box>
      </Box>
    </Section>
  );
};

export default AllCourses;
