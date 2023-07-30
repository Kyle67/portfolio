import { ModalContent, chakra } from "@chakra-ui/react";

export const BaseModalContent = chakra(ModalContent, {
  baseStyle: {
    backgroundColor: "#232533",
    color: "whiteAlpha.800",
    flexDir: "row",
    maxWidth: "70%",
    padding: "30px",
    columnGap: "30px",
  },
});
