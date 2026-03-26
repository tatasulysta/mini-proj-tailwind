import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { Layout } from "@/components/layout";
import { LangProvider } from "@/hooks/use-lang";
import "@/locales";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.variable}>
      <LangProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LangProvider>
    </div>
  );
}
