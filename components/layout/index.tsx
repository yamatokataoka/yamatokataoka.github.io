import Meta from "../meta";
import Navbar from "../navbar";
import Footer from "../footer";
import styles from "./layout.module.scss";

export default function Layout({
  children,
  name,
  description,
  avatarSrc,
  githubLink,
}) {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Navbar name={name} description={description} avatarSrc={avatarSrc} />
        <main className={styles.content}>{children}</main>
        <Footer name={name} github={githubLink} />
      </div>
    </>
  );
}
