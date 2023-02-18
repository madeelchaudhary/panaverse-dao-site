"use client";

import SecondaryButton from "@/src/components/UI/Button/SecondaryBtn";
import Section from "../components/Section";

const CtaHome = () => {
  return (
    <Section
      title="Start learning the highest quality courses"
      text="In addition to courses, we offer mentorship and professional development
    opportunities that enable our students to advance their careers.
    Transform your career now!"
      textStyles={{ maxW: "70ch" }}
    >
      <SecondaryButton
        link="//piaic.org"
        external={true}
        styles={{
          mx: "auto",
          mt: "6",
          display: "block",
          maxW: "fit-content",
          textTransform: "uppercase",
        }}
      >
        Find Your Course Now
      </SecondaryButton>
    </Section>
  );
};

export default CtaHome;
