import { CourseStructure } from "@/types/courses";
import { Grid } from "@chakra-ui/react";
import CourseItem from "./CourseItem";

const CourseList = ({ items }: { items: CourseStructure[] }) => {
  return (
    <Grid
      mt="10"
      templateColumns={{
        base: "repeat(auto-fit, minmax(280px, 1fr))",
        sm: "repeat(auto-fit, minmax(310px, 1fr))",
      }}
      justifyContent="center"
      gap={{ base: "7", lg: "9" }}
    >
      {items.map((course, i) => (
        <CourseItem
          key={i}
          title={course.title}
          ticker={"Trending"}
          link={course.link}
          learningCurve={course.learningCurve}
          imgSrc={course.img}
          desc={course.desc}
        />
      ))}
    </Grid>
  );
};

export default CourseList;
