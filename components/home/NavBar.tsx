import { Flex, chakra } from "@chakra-ui/react";
import Link from "next/link";

const NavBar = () => (
  <NavBarContainer>
    <Link href="#">Who am I?</Link>
    <Link href="#">Experience</Link>
    <Link href="#">Projects</Link>
    <Link href="#">Technologies</Link>
  </NavBarContainer>
);

export default NavBar;

const NavBarContainer = chakra(Flex, {
  baseStyle: {
    justifyContent: "center",
    gap: { base: "20px", md: "5%" },
    h: "50px",
    alignItems: "center",
    color: "whiteAlpha.900",
  },
});
