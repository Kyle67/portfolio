import Hero from "@/components/home/sections/Hero";
import NavBar from "@/components/home/NavBar";
import { Divider, Flex, chakra } from "@chakra-ui/react";
import Head from "next/head";
import Experience from "@/components/home/sections/Experience";
import Projects from "@/components/home/sections/Projects";
import Technologies from "@/components/home/sections/Technologies";

// TODO fonts - this can go in learned/challenges

// TODO: Rng placed stars in the background?

export default function Home() {
  return (
    // TODO: this head info should be in _document
    <>
      <Head>
        <title>Kyle Milburn</title>
        <meta name="description" content="Kyle's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/websiteIcon.png" />
      </Head>
      <MainContainer>
        <NavBar />
        <SectionsContainer>
          <Hero />
          <CustomDivider />
          <Experience />
          <CustomDivider />
          <Projects />
          <CustomDivider />
          <Technologies />
        </SectionsContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    backgroundColor: "#0E0D16",
    color: "whiteAlpha.900",
  },
});

const SectionsContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    margin: "50px",
    rowGap: "30px",
  },
});

const CustomDivider = chakra(Divider, {
  baseStyle: {
    // margin: "30px",
  },
});
