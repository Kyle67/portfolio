import { Flex, Heading } from "@chakra-ui/react";
import StackTechnology from "../StackTechnology";
import { technology } from "@/consts/technology";
import ExtendedTechnologyInfo from "../ExtendedTechnologyInfo";
import Link from "next/link";
import { SectionMainContainer } from "@/components/StyledComponents";

const Technologies = () => {
  return (
    <SectionMainContainer>
      <Link
        id="technology"
        href="#technology"
        style={{ alignSelf: "flex-start" }}
      >
        <Heading>Technologies</Heading>
      </Link>
      <Flex columnGap="30px">
        <StackTechnology technology="MongoDB" image="/technology/MongoDB.png" />
        <StackTechnology technology="Express" image="/technology/Express.png" />
        <StackTechnology technology="React" image="/technology/React.png" />
        <StackTechnology technology="Node.js" image="/technology/Nodejs.png" />
      </Flex>
      <Flex flexDir="column" w="100%" rowGap="50px">
        {technology.map((technologyInfo) => (
          <ExtendedTechnologyInfo
            key={technologyInfo.name}
            technologyInfo={technologyInfo}
          />
        ))}
      </Flex>
    </SectionMainContainer>
  );
};

export default Technologies;
