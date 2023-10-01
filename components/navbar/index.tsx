import Link from "next/link";
import Avatar from "../avatar";
import styles from "./navbar.module.scss";

export default function Navbar({ name, description, avatarSrc }) {
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.profile}>
        <>
          <Avatar src={avatarSrc} alt={name} />
          <div className={styles.profileContent}>
            <Link href="/" className={styles.name}>
              {name}
            </Link>
            <Link href="/" className={styles.description}>
              {description}
            </Link>
          </div>
        </>
      </Link>
    </header>
  );
}
