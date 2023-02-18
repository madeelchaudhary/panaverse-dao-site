import {
  Box,
  AccordionItem,
  Heading,
  AccordionButton,
  Circle,
  AccordionPanel,
  SystemStyleObject,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const CustomAccordion = ({
  title,
  children,
  accordionStyles,
  bgColor,
  expandedBgColor,
  boxShadow,
  expanedBoxShadow,
  borderRadius,
}: {
  title: string;
  children: React.ReactNode;
  accordionStyles?: SystemStyleObject;
  bgColor?: string;
  expandedBgColor?: string;
  boxShadow: string;
  expanedBoxShadow?: string;
  borderRadius?: string;
}) => {
  return (
    <AccordionItem sx={accordionStyles}>
      {({ isExpanded }) => (
        <>
          <Box
            bgColor={isExpanded ? expandedBgColor : bgColor}
            boxShadow={isExpanded ? expanedBoxShadow : boxShadow}
            borderRadius={borderRadius}
          >
            <Heading as="h3" py="1">
              <AccordionButton
                py="7"
                fontSize="2xl"
                fontWeight="black"
                fontFamily="heading"
                sx={{
                  _hover: {
                    ".accord-icon": {
                      bgColor: "secondary",
                      color: "white",
                    },
                  },
                }}
              >
                <Box as="span" flex="1" textAlign="left">
                  {title}
                </Box>
                <Circle
                  className="accord-icon"
                  size="12"
                  border="1px"
                  color={isExpanded ? "white" : "btnBg"}
                  bgColor={isExpanded ? "secondary" : "transparent"}
                  transition="transform 150ms ease"
                  transform={isExpanded ? "rotate(180deg)" : ""}
                >
                  <BsChevronDown />
                </Circle>
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4} px="5">
              {children}
            </AccordionPanel>
          </Box>
        </>
      )}
    </AccordionItem>
  );
};

export default CustomAccordion;
