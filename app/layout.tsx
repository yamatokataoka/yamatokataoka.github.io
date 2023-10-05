import { Metadata } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles.scss";
import config from "../config.json";

export const metadata: Metadata = {
  title: `${config.name} - ${config.description}`,
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
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
