import { Flex, Text } from "@chakra-ui/react";
import { capitalize } from "lodash";
import Image from "next/image";

interface StackTechnologyProps {
  technology: string;
  image: string;
}

const StackTechnology = ({ technology, image }: StackTechnologyProps) => {
  return (
    <Flex flexDir="column" rowGap="15px">
      <Flex alignSelf="center">
        <Text fontWeight="bold" fontSize="40px">
          {capitalize(technology.charAt(0))}
        </Text>
        <Text fontSize="20px" alignSelf="flex-end" paddingBottom="6px">
          {technology.substring(1)}
        </Text>
      </Flex>
      <Image
        src={image}
        alt={`${technology} logo`}
        width={100}
        height={10} // TODO: For some reason this doesn't work but is required
        style={{ objectFit: "contain", height: 100 }}
      />
    </Flex>
  );
};

export default StackTechnology;
