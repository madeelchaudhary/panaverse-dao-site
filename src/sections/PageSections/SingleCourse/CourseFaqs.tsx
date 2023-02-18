"use client";

import CustomAccordion from "@/src/components/CustomAccordion";
import Section from "@/src/components/Section";
import { Accordion, Box } from "@chakra-ui/react";

const CourseFaqs = () => {
  return (
    <Section
      title="Frequently Asked Questions"
      text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta molestiae laudantium nam, accusantium exercitationem? Excepturi voluptatibus iure modi nulla fugit dicta."
      textStyles={{ fontSize: { md: "lg" } }}
      sectionStyles={{ bgColor: "gray.50" }}
      titleId="faqs"
    >
      <Box mt="12">
        <Accordion allowToggle>
          <CustomAccordion
            boxShadow="lg"
            expanedBoxShadow="xl"
            title="Your Faq title here"
            accordionStyles={{
              border: "none",
              borderRadius: "lg",
              bgColor: "white",
              mb: "8",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              soluta molestiae laudantium nam, accusantium exercitationem?
              Excepturi voluptatibus iure modi nulla fugit dicta culpa veniam.
              Nulla voluptates enim pariatur inventore dolores veritatis ipsam
              atque molestiae vel hic dignissimos voluptatem perferendis.
            </p>
          </CustomAccordion>
        </Accordion>
      </Box>
    </Section>
  );
};

export default CourseFaqs;
