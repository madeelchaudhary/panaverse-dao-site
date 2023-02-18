import AllCourses from "@/src/sections/AllCourses";
import StatsSection from "@/src/sections/Stats";
import CtaNewsletter from "@/src/sections/CtaNewsletter";
import Hero from "@/src/sections/PageSections/Courses/Hero";
import ReviewCarousel from "@/src/components/Reviews/ReviewCarousel";
import { getAllCourses } from "@/helpers/courses";

import "../../styles/carousel.css";

const CoursesPage = async () => {
  const allCourses = await getAllCourses();
  return (
    <>
      <Hero />
      <StatsSection />
      <AllCourses courses={allCourses} />
      <ReviewCarousel />
      <CtaNewsletter />
    </>
  );
};

export default CoursesPage;
