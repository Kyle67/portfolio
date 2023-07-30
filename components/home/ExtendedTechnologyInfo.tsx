import { TechnologyData } from "@/consts/technology";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

interface ExtendedTechnologyInfo {
  technologyInfo: TechnologyData;
}

const ExtendedTechnologyInfo = ({ technologyInfo }: ExtendedTechnologyInfo) => {
  const { name, description, image, align } = technologyInfo;

  const isLeftAlign = align === "left";

  return (
    <Flex
      alignSelf={isLeftAlign ? "flex-start" : "flex-end"}
      columnGap="30px"
      maxW="90%"
      textAlign={isLeftAlign ? "left" : "right"}
    >
      {isLeftAlign && (
        <Image
          src={image}
          alt={`${name} logo`}
          width={250}
          height={10} // TODO: For some reason this doesn't work but is required
          style={{ objectFit: "contain", height: 100, alignSelf: "center" }}
        />
      )}
      <Flex flexDir="column" rowGap="10px">
        <Heading size="lg">{name}</Heading>
        <Text>{description}</Text>
      </Flex>
      {!isLeftAlign && (
        <Image
          src={image}
          alt={`${name} logo`}
          width={250}
          height={10} // TODO: For some reason this doesn't work but is required
          style={{ objectFit: "contain", height: 100, alignSelf: "center" }}
        />
      )}
    </Flex>
  );
};

export default ExtendedTechnologyInfo;
