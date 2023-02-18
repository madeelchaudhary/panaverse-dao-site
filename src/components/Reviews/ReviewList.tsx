"use client";
import ReviewStructure from "@/types/reviews";
import { Grid } from "@chakra-ui/react";
import Card from "../UI/Card/Card";
import ReviewItem from "./ReviewItem";

const CARD_BGS = ["#b9f5dc", "#fef0cb", "#cac0e5"];

const ReviewList = ({ reviews }: { reviews: ReviewStructure[] }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(auto-fit, minmax(285px, 1fr))",
        md: "repeat(auto-fit, minmax(320px, 1fr))",
      }}
      gap={{ base: "8" }}
      mt="14"
    >
      {reviews.map((item, i) => (
        <ReviewItem
          num={i + 1}
          CustomCard={Card}
          key={i}
          item={item}
          bgColor={i + 1 > CARD_BGS.length ? CARD_BGS[i % 3] : CARD_BGS[i]}
          cardStyles={{ pb: "5" }}
        />
      ))}
    </Grid>
  );
};

export default ReviewList;
