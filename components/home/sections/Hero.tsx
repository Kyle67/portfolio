import { Flex, Heading, Text, chakra } from "@chakra-ui/react";
import Terminal from "../Terminal";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";

// TODO: Could replace the main text with
/**
 * Hi! I'm Kyle
 *
 * Fullstack Web & Mobile Developer. Gamer at heart. Lover of keyboards
 */

const Hero = () => {
  return (
    <MainContainer>
      <Flex flexDir="column" rowGap="20px">
        <Link id="about" href="#about">
          <Heading color="whiteAlpha.800">Kyle Milburn</Heading>
        </Link>
        <Text color="whiteAlpha.800">
          Hi! My name is Kyle and I&apos;m a Web & Mobile developer. I pride
          myself on keeping a high-quality standard across all projects &
          believe that every project is a learning experience that expands my
          knowledge and improves my future practices.
        </Text>
      </Flex>
      <Flex w="2000px" h="300px">
        <Terminal />
      </Flex>
      {/**
       * // TODO: Fancy animation that slides in from right and shows the more info (probably a whole differnt page)
       */}
      <Flex flexDir="column" alignSelf="center">
        <Text color="whiteAlpha.800" alignSelf="center">
          About me
        </Text>
        <MdKeyboardDoubleArrowRight size={40} />
      </Flex>

      {/* <Flex flexDir="column">
          <Text>
            In 2013 my programming interest really sparked with my interest in
            how games worked and even briefly looking at Minecraft server plugin
            development (although I didn&apos;t get far at the time). Then for a
            while my true interest in development kind of flatlined (aside from
            constant consideration of how things worked and could hence be used
            in gaming) until I started my double degree at university of
            Mathematics & IT. Over the time of my degree I got to experience a
            large number of languages including but not limited to (.....). I
            think this combination of Maths & IT was invaluable to the skills
            and processes it provided for my development processes. Some of
            these key skills include critical thinking and .... .
          </Text>
          <Text>
            This then only further propelled my interest in development as I
            decided to persue a Masters in IT majoring in Software Development.
            This not only allowed me to further my understanding and attain
            experience in key real world practices via Cloud Computing, Real
            world projects & a Web & Mobile development unit which real ignited
            my passion for web development (which prior to that I hadn&apos;t
            been all that interested in.)
          </Text>
        </Flex> */}
    </MainContainer>
  );
};

export default Hero;

const MainContainer = chakra(Flex, {
  baseStyle: {
    margin: "30px",
  },
});
