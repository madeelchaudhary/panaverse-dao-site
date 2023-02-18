"use client";

import { Box } from "@chakra-ui/react";

const ShadowCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      pos="relative"
      transform="translate(-8px, -8px)"
      transition="transform ease-in-out 300ms"
      _after={{
        content: '""',
        width: "100%",
        height: "100%",
        display: "block",
        backgroundColor: "cardShadow",
        position: "absolute",
        left: "8px",
        top: "8px",
        zIndex: -1,
        transition: "transform ease-in-out 300ms",
      }}
      _hover={{
        transform: "translate(0, 0)",
        _after: {
          transform: "translate(-8px, -8px)",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ShadowCard;
