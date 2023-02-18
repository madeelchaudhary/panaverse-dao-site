import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsFacebook, BsTwitter, BsGithub, BsYoutube } from "react-icons/bs";
import Link from "../../UI/Navigation/Link";

const Footer = () => {
  return (
    <Box color="#abb4b8" as="footer" bgColor="primary" py="20">
      <Container maxW="container.xl" px="6">
        <Grid
          rowGap="8"
          columnGap={{ md: "12", lg: "16" }}
          as="nav"
          py={{ base: "20", lg: "24" }}
          borderY="1px"
          borderColor="whiteAlpha.200"
          templateColumns={{ md: "auto auto", lg: "40% 1fr 1fr 1fr" }}
        >
          <Box as="section">
            <Box>
              <Link
                link="/"
                styles={{
                  textDecor: "none",
                  maxWidth: "max-content",
                  display: "block",
                }}
              >
                <Image
                  maxW={{ base: "48", lg: "32" }}
                  src="/images/panaverse-logo.png"
                  alt="Panaverse Brand Logo"
                ></Image>
              </Link>
            </Box>
            <Box mt="5" maxW={{ base: "50ch", lg: "40ch" }}>
              <Text>
                Panaverse DAO is your key to the future of Web 3.0, Metaverse
                and Edge Computing with global opportunities for development,
                design, training and services.
              </Text>
            </Box>
          </Box>
          <Box as="section">
            <Heading as="h4" color="gray.50" fontSize="lg">
              About
            </Heading>
            <List mt="6" spacing="2">
              <ListItem>
                <Link link="#" styles={{}}>
                  Categories
                </Link>
              </ListItem>
              <ListItem>
                <Link link="#" styles={{}}>
                  Features
                </Link>
              </ListItem>
              <ListItem>
                <Link link="#" styles={{}}>
                  Browse Courses
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box as="section">
            <Heading as="h4" fontSize="lg" color="gray.50">
              Company
            </Heading>
            <List mt="6" spacing="2">
              <ListItem>
                <Link link="#" styles={{}}>
                  Projects
                </Link>
              </ListItem>
              <ListItem>
                <Link link="#" styles={{}}>
                  Stories
                </Link>
              </ListItem>
              <ListItem>
                <Link link="#" styles={{}}>
                  Testimonials
                </Link>
              </ListItem>
              <ListItem>
                <Link link="#" styles={{}}>
                  Blog
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box as="section">
            <VStack gap="6" alignItems="normal">
              <Box>
                <Heading as="h4" color="gray.50" fontSize="lg">
                  Any Questions?
                </Heading>
                <Text mt="6">
                  <Link
                    link="mailto:education@piaic.org"
                    styles={{
                      color: "secondary",
                      fontWeight: "bold",
                      fontSize: "sm",
                    }}
                  >
                    education@piaic.org
                  </Link>
                </Text>
              </Box>
              <Box>
                <Heading
                  as="h4"
                  fontWeight={"normal"}
                  fontSize="md"
                  color="gray.50"
                >
                  Follow @Panaverse
                </Heading>
                <List
                  color="gray.200"
                  mt="6"
                  display="flex"
                  flexDir="row"
                  gap="6"
                  fontSize="2xl"
                >
                  <ListItem>
                    <Link external link="#" styles={{}}>
                      <BsFacebook />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link external link="#" styles={{}}>
                      <BsTwitter />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link external link="#" styles={{}}>
                      <BsYoutube />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link external link="#" styles={{}}>
                      <BsGithub />
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </VStack>
          </Box>
        </Grid>
        <Grid
          pt="16"
          gap="6"
          templateColumns={{ md: "1fr auto" }}
          justifyContent="space-between"
        >
          <GridItem>
            <Text fontWeight={"medium"} color="whiteAlpha.800">
              &copy; 2023 Copyright. All rights reserved.
            </Text>
            <Text as="address" fontStyle="normal" mt="2" fontSize="sm">
              344 Elenor Island Apt, HF, AL 72354
            </Text>
          </GridItem>
          <GridItem>
            <List display={"flex"} gap="5">
              <ListItem>
                <Link link="#" styles={{}}>
                  Privacy Policy
                </Link>
              </ListItem>
              <ListItem>
                <Link link="#" styles={{}}>
                  Cookies
                </Link>
              </ListItem>
              <ListItem>
                <Link link="#" styles={{}}>
                  Terms
                </Link>
              </ListItem>
            </List>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
