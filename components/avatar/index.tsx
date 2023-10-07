import styles from "./styles.module.scss";

export default function Avatar({ src, alt }) {
  return (
    <div className={styles.avatar}>
      <img src={src} alt={alt} width="40" height="40" />
    </div>
  );
}
