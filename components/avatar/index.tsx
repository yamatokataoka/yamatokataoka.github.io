import Image from "next/image";
import styles from "./avatar.module.scss";

export default function Avatar({ src, alt }) {
  return (
    <div className={styles.avatar}>
      <Image src={src} alt={alt} width={40} height={40} />
    </div>
  );
}
