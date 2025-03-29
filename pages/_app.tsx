import NavbarComponent from "@/components/modules/Navbar/NavbarComponent";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavbarComponent />
      <Component {...pageProps} />
    </>
  )
}
