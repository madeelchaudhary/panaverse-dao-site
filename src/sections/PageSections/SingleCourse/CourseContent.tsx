"use client";

import CustomAccordion from "@/src/components/CustomAccordion";
import Section from "@/src/components/Section";
import { Accordion, Box } from "@chakra-ui/react";

const CourseContent = ({
  courseContent,
}: {
  courseContent: { title: string; markdown: string }[];
}) => {
  return (
    <Section
      title="Check the course content"
      text="We want you to make sure this course is a good fit for you. So start
            learning for free right now by clicking the PREVIEW links
            below."
      titleId="curriculum"
      sectionStyles={{ bgColor: "gray.50" }}
      textStyles={{ fontSize: { md: "lg" } }}
    >
      <Box mt="12">
        <Accordion
          defaultIndex={[0]}
          allowToggle
          sx={{ "& a": { color: "secondary", textDecor: "underline" } }}
        >
          {courseContent.map((item, i) => (
            <CustomAccordion
              key={i}
              title={item.title}
              bgColor="transparent"
              expandedBgColor="white"
              boxShadow="none"
              expanedBoxShadow="xl"
              borderRadius="lg"
              accordionStyles={{
                borderRadius: "lg",
                borderTop: "none",
                borderBottom: "2px solid white !important",
                borderColor: "white",
              }}
            >
              <Box
                dangerouslySetInnerHTML={{ __html: item.markdown }}
                sx={{
                  "& > p:not(p:first-child)": { mt: "5" },
                  "& ol, & ul": { ml: "7", mt: "3" },
                  "& > ol p:first-child": { fontWeight: "medium", mb: "1" },
                  "& ul li + li, & ol li + li": { mt: "2" },
                  "& ol p:not(p:first-child)": { ml: "3" },
                }}
              ></Box>
            </CustomAccordion>
          ))}
        </Accordion>
      </Box>
    </Section>
  );
};

export default CourseContent;
