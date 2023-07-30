import { Heading } from "@chakra-ui/react";
import Link from "next/link";

interface LinkHeadingProps {
  heading: string;
}

const LinkHeading = ({ heading }: LinkHeadingProps) => {
  const lowercaseHeading = heading.toLowerCase();

  return (
    <Link
      id={lowercaseHeading}
      href={`#${lowercaseHeading}`}
      style={{ alignSelf: "flex-start" }}
    >
      <Heading>{heading}</Heading>
    </Link>
  );
};

export default LinkHeading;
