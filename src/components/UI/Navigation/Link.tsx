"use client";

import { Link, SystemStyleObject } from "@chakra-ui/react";
import NextLink from "next/link";

const NavigationLink = ({
  children,
  link,
  external,
  styles = {},
  onClickHandler,
}: {
  link: string;
  external?: boolean;
  styles?: SystemStyleObject;
  children: React.ReactNode;
  onClickHandler?: () => void;
}) => {
  if (external) {
    return (
      <Link
        href={link}
        sx={styles}
        isExternal
        transition="opacity 0.2s ease-in-out"
        _hover={{
          opacity: "0.8",
        }}
      >
        {children}
      </Link>
    );
  }
  return (
    <NextLink href={link} legacyBehavior>
      <Link sx={styles} onClick={onClickHandler} color={"#abb4b8"}>
        {children}
      </Link>
    </NextLink>
  );
};

export default NavigationLink;
