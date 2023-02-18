import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import CourseContent from "@/src/sections/PageSections/SingleCourse/CourseContent";
import CourseFaqs from "@/src/sections/PageSections/SingleCourse/CourseFaqs";
import CourseHeader from "@/src/components/Courses/CourseOverview/CourseHeader";
import CourseInstructor from "@/src/sections/PageSections/SingleCourse/CourseInstructor";
import CourseMenu from "@/src/components/Courses/CourseOverview/CourseMenu";
import CourseDescription from "@/src/components/Courses/CourseOverview/CourseDescription";
import CoursePres from "@/src/components/Courses/CourseOverview/CoursePres";
import CourseReviews from "@/src/sections/PageSections/SingleCourse/CourseReviews";
import { getCourseContentById } from "@/helpers/courses";

const CoursePage = async ({ params }: { params: Params }) => {
  const courseId = params.courseId;
  if (courseId !== "web3-and-metaverse") {
    return <h1>Not found!</h1>;
  }
  const course = await getCourseContentById(courseId);

  if (!course) {
    return <h1>Not Found</h1>;
  }

  return (
    <>
      <CourseHeader />
      <CourseMenu />
      <CoursePres />
      <CourseDescription />
      <CourseInstructor />
      <CourseContent courseContent={course["course_content"]} />
      <CourseReviews />
      <CourseFaqs />
    </>
  );
};

export default CoursePage;
