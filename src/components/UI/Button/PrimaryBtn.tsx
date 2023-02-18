"use client";

import { SystemStyleObject } from "@chakra-ui/react";
import Button from "./Button";

const PrimaryButton = ({
  children,
  link,
  onClick,
  external,
  styles,
  customShadow,
}: {
  link?: string;
  external?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  styles: SystemStyleObject;
  customShadow?: string;
}) => {
  return (
    <Button
      external={external}
      link={link}
      onClick={onClick}
      styles={{
        bgColor: "btnBg",
        ...styles,
        zIndex: "0",
        pos: "relative",
        transition: "transform ease-in-out 300ms",
        _after: {
          content: '""',
          width: "100%",
          height: "100%",
          display: "block",
          boxShadow: customShadow ?? "4px 4px 0 1px white",
          position: "absolute",
          right: 0,
          bottom: 0,
          zIndex: -1,
          transition: "opacity ease-in-out 350ms",
        },
        _hover: {
          transform: "translate(4px, 4px)",
          _after: {
            opacity: "0",
          },
        },
        _focus: {
          transform: "translate(4px, 4px)",
          _after: {
            opacity: "0",
          },
        },
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
