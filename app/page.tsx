import React from "react";
import About from "../components/about";
import styles from "./page.module.scss";

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <About />
      </div>
    </div>
  );
}
