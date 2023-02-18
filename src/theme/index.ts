import { extendTheme } from "@chakra-ui/react";
import { Montserrat, Merriweather_Sans } from "@next/font/google";

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
});
const montserrat = Montserrat({ subsets: ["latin"] });

// HEADING
// -----Unbounded
// ----Rubik

// BODY
// ----Montserrat

// Hero text clr #d6e1e6

// COLORS
// ---PRIMARY
// ===== HEX #131d1f
// ===== RGBA rgba(19,29,31,255)

// ---- HEADING TEXT CLR
//  ======  HEX #113241

// ---- BODY TEXT CLR
//  ======  HEX  #404345 dark !!!#647077
//  ======  RGBA rgba(100,112,119,255)

// ---- Nav LInks TEXT CLR
//  ======  HEX #abb4b8
//  ======  RGBA rgb(179,177,181)

// ACCENT CLR
//  HEX #1fa95b
// RGB rgba(31,169,91,255)

// --- HEADER BG
//  ==== RGBA rgba(34,39,42,255)
//  ==== HEX #22272a

// --- FOOTER BG
//  ==== PRIMARY

// --- TESTIMONIAL BG
//  ==== HEX #f5db6d

// --- PRIMAEY BTN BG
//  ==== RGBA rgba(250,185,57,255)
//  ==== HEX #fab939

// CARD SHADOW
//  ==== #181d22

// First card
//  ==== #b9f5dc
// Second card
//  ==== #fef0cb
// Third card
//  ==== #cac0e5

// secondary: "#f5db6d",
const colors = {
  primary: "#131d1f",
  secondary: "#f8b73c",
  accent: "#1fa95b",
  btnBg: "#fab939",
  headerBg: "#22272a",
  cardShadow: "#181d22",
  bodyText: "#404345",
  headingText: "#113241",
  secondaryText: "#d6e1e6",
};

const fonts = {
  body: montserrat.style.fontFamily,
  heading: merriweather.style.fontFamily,
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      html: {
        scrollPadding: "80px",
        scrollBehavior: "smooth",
      },
      "::selection": {
        bgColor: "secondary",
        color: "gray.50",
      },
      body: {
        color: "bodyText",
      },
      "h1, h2, h3, h4": {
        fontWeight: "black",
        color: "headingText",
      },
    },
  },
  fonts,
  breakpoints: {
    md: "49em",
  },
});

export default theme;
