import {
  Box,
  Container,
  Heading,
  SystemStyleObject,
  Text,
} from "@chakra-ui/react";

const Section = ({
  title,
  text,
  children,
  sectionStyles,
  titleStyles,
  textStyles,
  containerWidth,
  titleId,
}: {
  title: string;
  text: string;
  children: React.ReactNode;
  containerWidth?: string;
  titleId?: string;
  sectionStyles?: SystemStyleObject;
  titleStyles?: SystemStyleObject;
  textStyles?: SystemStyleObject;
}) => {
  return (
    <Box as="section" py={{ base: "24", lg: "28" }} sx={sectionStyles}>
      <Container maxW={containerWidth ?? "container.xl"}>
        <Box textAlign="center">
          <Heading
            id={titleId}
            mb="6"
            fontWeight={"black"}
            fontSize={{ base: "4xl", lg: "5xl" }}
            sx={titleStyles}
          >
            {title}
          </Heading>
          {text && (
            <Text maxW="64ch" mx="auto" sx={textStyles}>
              {text}
            </Text>
          )}
        </Box>
        {children}
      </Container>
    </Box>
  );
};

export default Section;
