import NavbarComponent from "@/components/modules/Navbar/NavbarComponent";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="relative min-h-screen w-full MAIN">
      <NavbarComponent />
      <div className="min:[995px]:pt-[80px] bg-black MAINMAIN">
        <Component {...pageProps} />
      </div>
    </main>
  )
}
