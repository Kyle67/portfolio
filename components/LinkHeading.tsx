import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface LinkHeadingProps {
  heading: string;
  customText?: string;
  font?: string;
  children?: ReactNode;
}

const LinkHeading = ({
  heading,
  customText,
  font,
  children,
}: LinkHeadingProps) => {
  const lowercaseHeading = heading.toLowerCase();

  return (
    <Link
      id={lowercaseHeading}
      href={`#${lowercaseHeading}`}
      style={{
        alignSelf: "flex-start",
      }}
    >
      {children ?? (
        <Text fontSize="28px" className={font}>
          {customText ?? heading}
        </Text>
      )}
    </Link>
  );
};

export default LinkHeading;
