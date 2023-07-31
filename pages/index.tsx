import NavBar from "@/components/home/NavBar";
import Experience from "@/components/home/sections/Experience";
import Hero from "@/components/home/sections/Hero";
import Projects from "@/components/home/sections/Projects";
import Technologies from "@/components/home/sections/Technologies";
import { Divider, Flex, chakra } from "@chakra-ui/react";
import Head from "next/head";

import { Rubik } from "next/font/google";
const mainFont = Rubik({
  weight: "400",
  subsets: [],
});

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
      <MainContainer className={mainFont.className}>
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
    background:
      "radial-gradient(circle, rgba(23,20,65,1) 0%, rgba(26,27,87,1) 50%, rgba(12,51,87,1) 100%)",
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
    borderColor: "transparent",
    borderWidth: "0px",
    boxShadow: "0px 0px 4px 0.5px #5c76c4",
  },
});
