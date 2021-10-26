import Link from "next/link";
import Avatar from "../avatar";
import styles from "./navbar.module.scss";

export default function Navbar({ name, description, avatarSrc }) {
  return (
    <header className={styles.container}>
      <Link href="/" passHref>
        <a href="replace by passHref" className={styles.profile}>
          <Avatar src={avatarSrc} alt={name} />
          <div className={styles.profileContent}>
            <Link href="/" passHref>
              <a href="replace by passHref" className={styles.name}>
                {name}
              </a>
            </Link>
            <Link href="/" passHref>
              <a href="replace by passHref" className={styles.description}>
                {description}
              </a>
            </Link>
          </div>
        </a>
      </Link>
    </header>
  );
}
