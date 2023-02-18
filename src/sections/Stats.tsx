"use client";

import Stat from "@/src/components/Stat";
import { Box, Container, Grid } from "@chakra-ui/react";

const StatsSection = () => {
  return (
    <Box pb={{ base: "20" }} pt="12">
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(auto-fit, minmax(220px, 1fr))" gap="6">
          <Stat stat="10,000+" label="students" />
          <Stat stat="100,000+" label="applicants" />
          <Stat stat="1000+" label="classes" />
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
