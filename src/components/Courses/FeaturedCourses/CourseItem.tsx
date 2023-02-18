import { Box, Image, Heading, Text, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { BsInfoCircle } from "react-icons/bs";
import Card from "../../UI/Card/Card";

const CourseItem = ({
  imgSrc,
  title,
  ticker,
  desc,
  learningCurve,
  link,
}: {
  link: string | undefined;
  ticker?: string;
  learningCurve: string;
  imgSrc: string;
  title: string;
  desc: string;
}) => {
  return (
    <Card
      styles={{ py: "5", px: "4", bgColor: "white" }}
      shadow="-4px -4px 15px rgba(255,255,255,0.2),
    4px 8px 15px rgba(70,70,70,0.2);"
    >
      <Box borderRadius="md" overflow="hidden" pos="relative">
        <Link href={link ? link : "#"}>
          <Image
            src={imgSrc}
            h="225px"
            objectFit="cover"
            w="full"
            alt=""
          ></Image>
        </Link>
        {ticker && (
          <HStack
            pos="absolute"
            py="2"
            px="3"
            color="white"
            fontSize={"xs"}
            fontWeight="bold"
            borderRadius="md"
            top="3"
            right={"3"}
            bgColor="secondary"
          >
            <BsInfoCircle />
            <Text>{ticker}</Text>
          </HStack>
        )}
      </Box>
      <Box pt="8" pb="3">
        <Text color="secondary" fontWeight="bold" fontSize="sm" mb="4">
          {learningCurve}
        </Text>
        <Link href={link ? link : "#"}>
          <Heading
            noOfLines={1}
            as="h3"
            fontSize="2xl"
            fontWeight="black"
            mb="2"
          >
            {title}
          </Heading>
        </Link>
        <Text noOfLines={4}>{desc}</Text>
      </Box>
    </Card>
  );
};

export default CourseItem;
