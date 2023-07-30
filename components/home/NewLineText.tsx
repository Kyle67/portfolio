import { Flex, Text } from "@chakra-ui/react";

const NewLineText = ({ text }: { text: string }) => {
  const newText = text.split("\n").map((str) => <Text key={str}>{str}</Text>);

  return <Flex flexDir="column">{newText}</Flex>;
};

export default NewLineText;
