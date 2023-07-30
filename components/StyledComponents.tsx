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
