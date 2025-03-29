import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>☕Next-Coffee</title>
      <body className="antialiased font-[family-name:var(--font-geist-sans)]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
