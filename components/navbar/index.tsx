import Link from "next/link";
import Avatar from "../avatar";
import styles from "./styles.module.scss";

export default function Navbar({ name, description }) {
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.profile}>
        <>
          <Avatar alt={name} />
          <div className={styles.profileContent}>
            <p className={styles.name}>{name}</p>
            <p className={styles.description}>{description}</p>
          </div>
        </>
      </Link>
    </header>
  );
}
