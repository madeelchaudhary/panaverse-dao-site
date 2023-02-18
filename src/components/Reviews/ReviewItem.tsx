import ReviewStructure from "@/types/reviews";
import {
  Box,
  Text,
  Image,
  VStack,
  Heading,
  HStack,
  SystemStyleObject,
} from "@chakra-ui/react";
import Card from "../UI/Card/Card";
import ShadowCard from "../UI/Card/ShadowCard";

const ReviewItem = ({
  item,
  CustomCard,
  bgColor,
  spacing,
  num,
  cardStyles,
}: {
  num: number;
  item: ReviewStructure;
  CustomCard: typeof ShadowCard | typeof Card;
  bgColor?: string;
  spacing?: string;
  cardStyles?: SystemStyleObject;
}) => {
  return (
    <CustomCard tag="div">
      <Box as="blockquote" px="5" py="8" bgColor={bgColor} sx={cardStyles}>
        <VStack alignItems={"normal"} gap={spacing ?? "3"}>
          <Heading as="h3" fontWeight="black" fontSize="xl">
            &quot;{item.title}&quot;
          </Heading>
          <Text>{item.desc}</Text>
          <HStack as="footer" mt="16" gap="3">
            <Box borderRadius="full" overflow={"hidden"} maxW="12">
              <Image
                src={item.avatar + `${num}.${item.avatarType}`}
                alt=""
              ></Image>
            </Box>
            <VStack alignItems="normal" justify="center">
              <Text
                fontStyle="normal"
                as="cite"
                color={"headingText"}
                fontWeight="bold"
                fontSize="sm"
              >
                {item.name}
              </Text>
              <Text m="0 !important" fontSize="xs">
                {item.job}
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </CustomCard>
  );
};

export default ReviewItem;
