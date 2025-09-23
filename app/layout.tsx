import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./global.scss";
import styles from "./layout.module.scss";
import config from "../config.json";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${config.name} - ${config.description}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoFlex.className}>
      <body>
        <div className={styles.container}>
          <Navbar name={config.name} description={config.description} />
          <main className={styles.content}>{children}</main>
          <Footer name={config.name} github={config.githubLink} />
        </div>
      </body>
    </html>
  );
}

export const viewport = {
  colorScheme: "dark",
};
