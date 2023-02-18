"use client";

import { HStack, Input } from "@chakra-ui/react";
import SecondaryButton from "@/src/components/UI/Button/SecondaryBtn";
import React from "react";
import Section from "../components/Section";

const CtaNewsletter = () => {
  return (
    <Section
      title="Subscribe to get updates of latest trends"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
    commodi in ipsum. lorem ipsum dolor sit amet elit."
    >
      <form>
        <HStack
          flexDir={{ base: "column", md: "row" }}
          maxW="60ch"
          mx="auto"
          h={{ md: "14" }}
          mt="10"
          gap={{ base: "5", md: "0" }}
        >
          <Input
            _hover={{}}
            _focus={{ boxShadow: "inner", borderColor: "secondary" }}
            type="email"
            fontSize="lg"
            border="2px solid"
            borderColor="secondary"
            py={{ base: "4", md: "6" }}
            px="6"
            h={{ md: "full" }}
            borderLeftRadius="full"
            borderRightRadius={{ base: "full", md: "none" }}
            placeholder="Enter your email"
          />
          <SecondaryButton
            external={false}
            styles={{
              w: { base: "full", md: "auto" },
              borderLeftRadius: { base: "auto", md: "0" },
              py: "4",
              m: "0 !important",
            }}
          >
            Subscribe
          </SecondaryButton>
        </HStack>
      </form>
    </Section>
  );
};

export default CtaNewsletter;
