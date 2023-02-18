import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SingleStat = ({
  stat,
  label,
}: {
  stat: string | number;
  label: string;
}) => {
  return (
    <Box as="article" bgColor="gray.50" px="8" py="7" boxShadow="md">
      <VStack gap="6">
        <Text color="accent" fontSize={{ base: "4xl", md: "5xl" }}>
          {stat}
        </Text>
        <Box as="span" minW="7" minH="3px" bgColor="headingText"></Box>
        <Heading as="h3" color="blackAlpha.700" fontSize="md">
          {label}
        </Heading>
      </VStack>
    </Box>
  );
};

export default SingleStat;
