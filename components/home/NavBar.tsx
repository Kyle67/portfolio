import { Flex, chakra } from "@chakra-ui/react";
import Link from "next/link";

// TODO: Scroll to top button hovering in bottom right?

const NavBar = () => (
  <NavBarContainer>
    <Link href="#about">Who am I?</Link>
    <Link href="#experience">Experience</Link>
    <Link href="#projects">Projects</Link>
    <Link href="#technology">Technologies</Link>
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
  }, // TODO: A show on this stuff might look okay. Sort of more like a dark cloud behind it though
});
