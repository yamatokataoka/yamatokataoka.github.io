import Image from "next/image";
import avatarPic from "../../public/avatar.png";
import styles from "./styles.module.scss";

export default function Avatar({ alt }) {
  return (
    <div className={styles.avatar}>
      <Image src={avatarPic} alt={alt} width="40" height="40" />
    </div>
  );
}
