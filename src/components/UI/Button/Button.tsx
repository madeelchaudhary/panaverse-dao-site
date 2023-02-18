"use client";

import { Box, Link, SystemStyleObject } from "@chakra-ui/react";
import NextLink from "next/link";

const GenericButton = ({
  children,
  link,
  external,
  onClick,
  styles,
}: {
  children: React.ReactNode;
  styles: SystemStyleObject;
  link?: string;
  external?: boolean;
  onClick?: () => void;
}) => {
  const btnStyles = {
    ...styles,
    px: styles.px ?? "7",
    py: styles.py ?? "4",
    color: styles.color ?? "headingText",
    fontWeight: "semibold",
    fontFamily: "heading",
  };

  if (link) {
    return (
      <Link
        href={link}
        as={external ? "a" : NextLink}
        sx={btnStyles}
        isExternal={external}
      >
        {children}
      </Link>
    );
  }

  return (
    <Box as="button" onClick={onClick} outline="0" sx={btnStyles}>
      {children}
    </Box>
  );
};

export default GenericButton;
