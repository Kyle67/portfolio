import { Flex, Heading, Text, chakra } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyle Milburn</title>
        <meta name="description" content="Kyle's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/websiteIcon.png" />
      </Head>
      <MainContainer>
        <Heading>Kyle Milburn</Heading>
        <Flex>
          <Text>
            Hi! My name is Kyle & I&apos;m a Web & Mobile developer who loves to
            work on projects that will actually benefit its users. I pride
            myself on keeping a high-quality standard across all projects &
            believe that every project is a learning experience that expands my
            knowledge and improves my future practices.
          </Text>
          {/**
           * // TODO: Fancy animation that slides in from right and shows the more info (probably a whole differnt page)
           */}
          <Text>More about my journey &gt;&gt;</Text>
        </Flex>
        <Flex flexDir="column">
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
        </Flex>
      </MainContainer>
    </>
  );
}

const MainContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
  },
});
