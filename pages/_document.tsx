import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en" className="bg-black">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next-Coffee - A Next.js Coffee Shop Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <title>☕Next-Coffee</title>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
