import { Html, Head, Main, NextScript } from "next/document";
import { ThemeModeScript } from 'flowbite-react';

export default function Document() {
  return (
    <Html lang="en" className="bg-black">
      <Head />
      <title>☕Next-Coffee</title>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
