"use client";

import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
};

export default Main;
