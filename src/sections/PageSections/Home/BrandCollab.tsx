"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Box, Image } from "@chakra-ui/react";

const BRAND_IMGS = [
  "/images/brands/google.png",
  "/images/brands/slack.png",
  "/images/brands/etsy.png",
  "/images/brands/spotify.png",
  "/images/brands/microsoft.png",
  "/images/brands/adobe.png",
  "/images/brands/semrush.png",
  "/images/brands/payoneer.png",
];
const BrandCollab = () => {
  return (
    <Box borderBottom="2px solid" borderColor="blackAlpha.600">
      <Box py="12" overflow={"hidden"}>
        <Splide
          style={{ display: "flex" }}
          options={{
            type: "loop",
            drag: "free",
            gap: "5rem",
            autoScroll: {
              speed: 1,
              autoStart: true,
              pauseOnHover: true,
              rewind: true,
            },
            fixedWidth: "max-content",
            arrows: false,
            pagination: false,
          }}
          extensions={{ AutoScroll }}
        >
          {BRAND_IMGS.map((img) => (
            <SplideSlide
              style={{ display: "flex", alignItems: "center" }}
              key={img}
            >
              <Box>
                <Image
                  transition="filter 150ms ease-in-out"
                  _hover={{ filter: "grayScale(0)" }}
                  filter={"grayscale(1)"}
                  src={img}
                  alt=""
                  maxH="40px"
                  maxW="200px"
                ></Image>
              </Box>
            </SplideSlide>
          ))}
        </Splide>
      </Box>
    </Box>
  );
};

export default BrandCollab;
