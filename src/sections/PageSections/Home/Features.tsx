"use client";

import Section from "@/src/components/Section";
import ShadowCard from "@/src/components/UI/Card/ShadowCard";
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { FaBox, FaBook, FaCertificate } from "react-icons/fa";
import { IconType } from "react-icons/lib";

const CARD_BGS = ["#b9f5dc"];

const FeatureCard = ({
  title,
  text,
  icon,
  bgColor,
}: {
  title: string;
  text: string;
  icon: IconType;
  bgColor: string;
}) => {
  return (
    <ShadowCard>
      <Box
        h="full"
        display="flex"
        flexDirection="column"
        gap="5"
        px="6"
        py="8"
        as="article"
        bgColor={bgColor}
      >
        <VStack
          justify="center"
          w="5rem"
          h="5rem"
          bgColor="white"
          color="linkedin.500"
        >
          <Icon
            filter="brightness(70%)"
            color={bgColor}
            boxSize="8"
            as={icon}
          />
        </VStack>
        <Heading as="h3" fontWeight="900" fontSize="2xl">
          {title}
        </Heading>
        <Text>{text}</Text>
      </Box>
    </ShadowCard>
  );
};

const Features = () => {
  return (
    <Section
      title="Acheive Your Goals with Panaverse"
      text="Panaverse has a strong emphasis on hands-on learning, with
    interactive labs and projects that encourage learning by doing."
    >
      <Grid
        templateColumns={{
          base: "repeat(auto-fit, minmax(285px, 1fr))",
          md: "repeat(auto-fit, minmax(320px, 1fr))",
        }}
        gap={{ base: "10", xl: "14" }}
        mt="14"
      >
        <FeatureCard
          title="Learn the latest skills"
          text="We offer a variety of opportunities for you to learn the latest skills in emerging technologies. Our curriculum is designed by industry experts. Our courses are accessible from anywhere, at any time and are completely free."
          bgColor="#b9f5dc"
          icon={FaBook}
        />
        <FeatureCard
          title="Get ready for a career"
          text="We want to provide educational resources and support for anyone
            interested in learning more about emerging technologies,
            including Metaverse, Web3, Blockchain, AI, IoT as well as other
            related topics."
          bgColor="#fef0cb"
          icon={FaBox}
        />
        <FeatureCard
          title="Earn a certificate"
          text=" We offer several courses and certificates that have been
            developed by industry experts. These are designed to help you
            gain essential skills as well as provide you with the
            credentials needed for a career transition or promotion."
          bgColor="#cac0e5"
          icon={FaCertificate}
        />
      </Grid>
    </Section>
  );
};

export default Features;
