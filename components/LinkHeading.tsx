import { Heading } from "@chakra-ui/react";
import Link from "next/link";

interface LinkHeadingProps {
  heading: string;
  customText?: string;
}

const LinkHeading = ({ heading, customText }: LinkHeadingProps) => {
  const lowercaseHeading = heading.toLowerCase();

  return (
    <Link
      id={lowercaseHeading}
      href={`#${lowercaseHeading}`}
      style={{ alignSelf: "flex-start" }}
    >
      <Heading>{customText ?? heading}</Heading>
    </Link>
  );
};

export default LinkHeading;
