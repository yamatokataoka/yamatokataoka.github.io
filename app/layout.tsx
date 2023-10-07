import { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import Layout from "../components/layout";
import "./global.scss";
import config from "../config.json";

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${config.name} - ${config.description}`,
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoFlex.className}>
      <body>
        <Layout
          name={config.name}
          description={config.description}
          avatarSrc={config.avatarSrc}
          githubLink={config.githubLink}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
