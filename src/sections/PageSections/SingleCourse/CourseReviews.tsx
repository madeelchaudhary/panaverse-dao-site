"use client";

import { Box, Container, Heading } from "@chakra-ui/react";
import ReviewList from "@/src/components/Reviews/ReviewList";
import Section from "@/src/components/Section";

const DUMMY_REVIEW = {
  title: "High quality content",
  name: "John doe",
  job: "Student",
  desc: "This course provides focused information about web3 technologies. I'm very glad to have this course so I can go back and view it again whenever I need a refresher or update on web3 technologies.",
  avatar: "/images/review_",
  avatarType: "jpg",
};

const CourseReviews = () => {
  return (
    <Section
      title='Don"t just take our word for it'
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quo corporis voluptatum similique voluptatem laborum officiis."
      containerWidth="1440px"
      titleId="reviews"
    >
      <Box mt="14">
        <ReviewList reviews={[DUMMY_REVIEW, DUMMY_REVIEW, DUMMY_REVIEW]} />
      </Box>
    </Section>
  );
};

export default CourseReviews;
