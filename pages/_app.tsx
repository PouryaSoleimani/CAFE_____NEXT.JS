import FooterComponent from "@/components/modules/Footer/FooterComponent";
import NavbarComponent from "@/components/modules/Navbar/NavbarComponent";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from 'react-hot-toast'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="relative min-h-screen w-full MAIN">
      <Toaster position="top-right" reverseOrder={true} />
      <NavbarComponent />
      <div className="min:[995px]:pt-[80px] bg-black MAINMAIN">
        <Component {...pageProps} />
        <FooterComponent />
      </div>
    </main>
  )
}
