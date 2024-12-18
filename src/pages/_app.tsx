import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
