import { CourseStructure } from "@/types/courses";
import { Grid } from "@chakra-ui/react";
import CourseItem from "./CourseItem";

const CourseList = ({ courses }: { courses: CourseStructure[] }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(auto-fit, minmax(285px, 1fr))",
        sm: "repeat(auto-fit, minmax(320px, 1fr))",
      }}
      gap="6"
    >
      {courses.map((item, i) => (
        <CourseItem key={i} course={item} />
      ))}
    </Grid>
  );
};

export default CourseList;
