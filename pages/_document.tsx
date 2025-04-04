import { Html, Head, Main, NextScript } from "next/document";
import { ThemeModeScript } from 'flowbite-react';

export default function Document() {
  return (
    <Html lang="en" className="bg-black">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next-Coffee - A Next.js Coffee Shop Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../path/to/flowbite/dist/flowbite.min.css" />
        <ThemeModeScript localStorageKey="theme" mode="dark" defaultMode="auto" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.4.0/flowbite.min.css" />
      </Head>
      <title>☕Next-Coffee</title>
      <body className="antialiased">
        <Main />
        <NextScript />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </Html>
  );
}
