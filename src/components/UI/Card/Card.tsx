import { Box, SystemStyleObject } from "@chakra-ui/react";
import React from "react";

const Card = ({
  tag,
  shadow,
  children,
  styles,
}: {
  tag?: any;
  shadow?: string;
  children: React.ReactNode;
  styles?: SystemStyleObject;
}) => {
  return (
    <Box
      as={tag ?? "article"}
      overflow="hidden"
      borderRadius="lg"
      boxShadow={shadow ?? "md"}
      sx={styles}
    >
      {children}
    </Box>
  );
};

export default Card;
