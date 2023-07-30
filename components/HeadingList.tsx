import { Flex, ListItem, Text, UnorderedList, chakra } from "@chakra-ui/react";

interface HeadingListProps {
  heading: string;
  data: unknown[];
  formatter?: (text: any) => string;
}

const HeadingList = ({
  heading,
  data,
  formatter = (text: string) => text,
}: HeadingListProps) => (
  <Flex flexDir="column">
    <Subheading>{heading}</Subheading>
    <UnorderedList>
      {data.map((item, index) => (
        <ListItem key={index}>{formatter(item)}</ListItem>
      ))}
    </UnorderedList>
  </Flex>
);

export default HeadingList;

const Subheading = chakra(Text, {
  baseStyle: {
    textDecoration: "underline",
  },
});
