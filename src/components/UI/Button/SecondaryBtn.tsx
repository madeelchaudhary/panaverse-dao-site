"use client";

import { SystemStyleObject } from "@chakra-ui/react";
import Button from "./Button";

const SecondaryButton = ({
  styles,
  link,
  external,
  onClick,
  children,
}: {
  styles: SystemStyleObject;
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
  external?: boolean;
}) => {
  return (
    <Button
      external={external}
      link={link}
      onClick={onClick}
      styles={{
        borderRadius: "full",
        bgColor: "secondary",
        transition: "opacity .2s ease-in",
        ...styles,
        _hover: {
          opacity: ".9",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
