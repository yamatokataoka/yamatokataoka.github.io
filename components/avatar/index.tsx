import Image from "next/image";
import styles from "./styles.module.scss";

interface AvatarProps {
  alt: string;
}

export default function Avatar({ alt }: AvatarProps) {
  return (
    <div className={styles.avatar}>
      <Image src="/avatar.png" alt={alt} width="40" height="40" />
    </div>
  );
}
