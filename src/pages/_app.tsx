import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen flex w-full overflow-hidden">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <div className="sticky top-0 z-10">
          <Header />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
