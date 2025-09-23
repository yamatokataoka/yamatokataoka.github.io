import Link from "next/link";
import styles from "./styles.module.scss";

interface FooterProps {
  name: string;
  github: string;
}

export default function Footer({ name, github }: FooterProps) {
  return (
    <footer className={styles.container}>
      <p className={styles.copyright}>
        ©{new Date().getFullYear()} {name}
      </p>
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
