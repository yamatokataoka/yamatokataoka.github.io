import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles.scss";
import config from "../config.json";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout
      name={config.name}
      description={config.description}
      avatarSrc={config.avatarSrc}
      githubLink={config.githubLink}
    >
      <Head>
        <title>
          {config.name} - {config.description}
        </title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
