import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // TODO: Smooth scroll doesn't work on clicking links, but works on load of link with one
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
