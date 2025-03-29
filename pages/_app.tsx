import NavbarComponent from "@/components/modules/Navbar/NavbarComponent";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="relative min-h-screen w-full">
      <NavbarComponent />
      <div className="pt-[80px]"> {/* Add padding-top to account for fixed navbar */}
        <Component {...pageProps} />
      </div>
    </main>
  )
}
