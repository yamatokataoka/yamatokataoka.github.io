import Image from "next/image";
import styles from "./styles.module.scss";

export default function Avatar({ alt }) {
  return (
    <div className={styles.avatar}>
      <Image src="/avatar.png" alt={alt} width="40" height="40" />
    </div>
  );
}
