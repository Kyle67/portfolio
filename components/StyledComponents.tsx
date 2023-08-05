import { Flex, ModalContent, chakra } from "@chakra-ui/react";

export const StyledModalContent = chakra(ModalContent, {
  baseStyle: {
    backgroundColor: "#232533",
    color: "whiteAlpha.800",
    flexDir: "row",
    maxWidth: "70%",
    padding: "30px",
    columnGap: "30px",
  },
});

export const SectionMainContainer = chakra(Flex, {
  baseStyle: {
    flexDir: "column",
    alignItems: "center",
    rowGap: "30px",
  },
});

export const InfoBoxContainer = chakra(Flex, {
  baseStyle: {
    padding: "30px",
    boxShadow: "3px 3px 5px 1px black, 0px 0px 3px 1px #000052 inset",
    borderRadius: "20px",
    _hover: { cursor: "pointer" },
    columnGap: "30px",
    width: "700px",
  },
});
