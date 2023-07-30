import { Flex, Heading } from "@chakra-ui/react";
import StackTechnology from "../StackTechnology";
import { technology } from "@/consts/technology";
import ExtendedTechnologyInfo from "../ExtendedTechnologyInfo";
import Link from "next/link";

const Technologies = () => {
  return (
    <Flex flexDir="column" alignItems="center" rowGap="40px">
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
        {Object.entries(technology).map(
          ([technology, { description, image, align }]) => (
            <ExtendedTechnologyInfo
              key={technology}
              technology={technology}
              description={description}
              image={image}
              align={align}
            />
          )
        )}
      </Flex>
    </Flex>
  );
};

export default Technologies;
