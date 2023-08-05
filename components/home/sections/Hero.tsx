import LinkHeading from "@/components/LinkHeading";
import { Flex, Text, chakra, keyframes } from "@chakra-ui/react";
import { Comfortaa, Fredericka_the_Great } from "next/font/google";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Terminal from "../Terminal";

// TODO: Could replace the main text with
/**
 * Hi! I'm Kyle
 *
 * Fullstack Web & Mobile Developer. Gamer at heart. Lover of keyboards
 */

const heroBodyFont = Comfortaa({
  weight: "400",
  subsets: [],
});

const heroTitleFont = Fredericka_the_Great({
  weight: "400",
  subsets: [],
});

const Hero = () => {
  return (
    <MainContainer>
      <Flex flexDir="column" rowGap="20px" alignSelf="center">
        <LinkHeading heading="About" font={heroTitleFont.className}>
          <Flex columnGap="10px">
            <Text className={heroTitleFont.className} fontSize="28px" data-peer>
              Hi, I&apos;m Kyle
            </Text>
            <AnimatedWave fontSize="28px">👋</AnimatedWave>
          </Flex>
        </LinkHeading>
        <Text>Fullstack Web & Mobile Developer</Text>
        <Text color="whiteAlpha.800" className={heroBodyFont.className}>
          I pride myself on high-quality standards across all projects & believe
          that every project is a learning experience that expands my knowledge
          and improves my future practices.
        </Text>
        <Flex fontSize="32px" columnGap="7px" opacity="30%">
          <AiFillGithub
            onClick={() => window.open("https://github.com/Kyle67", "_blank")}
            cursor="pointer"
          />
          <AiFillLinkedin
            onClick={() =>
              window.open("https://www.linkedin.com/in/kylemilburn/", "_blank")
            }
            cursor="pointer"
          />
        </Flex>
      </Flex>

      <Terminal />

      {/**
       * // TODO: Fancy animation that slides in from right and shows the more info (probably a whole differnt page)
       */}
      <Flex flexDir="column" alignSelf="center">
        <Text color="whiteAlpha.800" alignSelf="center">
          About me
        </Text>
        <MdKeyboardDoubleArrowRight size={40} />
      </Flex>

      {/* <Flex flexDir="column"> // TODO: Move to other animated about me component when created
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

const rotateLoop = keyframes`
0% {
  transform: rotate(0deg);
}
50% {
  transform: rotate(50deg);
}
100% {
  transform: rotate(0deg)
}
`;

const AnimatedWave = chakra(Text, {
  baseStyle: {
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease",
    width: "fit-content",
    _peerHover: {
      animation: `${rotateLoop} 0.6s linear infinite`,
    },
  },
});
