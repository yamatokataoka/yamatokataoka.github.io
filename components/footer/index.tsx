import Link from "next/link";
import styles from "./styles.module.scss";

export default function Footer({ name, github }) {
  return (
    <footer className={styles.container}>
      <p className={styles.copyright}>©2021 {name}</p>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <span> | </span>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
