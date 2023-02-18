import FeaturedCourses from "@/src/sections/FeaturedCourses";
import MoreAbout from "@/src/sections/PageSections/Home/MoreAbout";
import ReviewCarousel from "@/src/components/Reviews/ReviewCarousel";
import BrandCollab from "@/src/sections/PageSections/Home/BrandCollab";
import Features from "@/src/sections/PageSections/Home/Features";
import HeroSection from "@/src/sections/PageSections/Home/Hero";
import { getFeaturedCourses } from "@/helpers/courses";
import CtaAction from "@/src/sections/CtaAction";

import "../styles/carousel.css";

export default async function Home() {
  const featuredCourses = await getFeaturedCourses();

  return (
    <>
      <HeroSection />
      <BrandCollab />
      <Features />
      <FeaturedCourses courses={featuredCourses} />
      <MoreAbout />
      <ReviewCarousel />
      <CtaAction />
    </>
  );
}
