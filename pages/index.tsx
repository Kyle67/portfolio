import { Flex, Heading } from "@chakra-ui/react";
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
      <Flex>
        <Heading>Test</Heading>
      </Flex>
    </>
  );
}
