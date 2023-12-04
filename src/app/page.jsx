import styles from "./page.module.css";
import HomeClient from "@/components/home/home-client";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HomeClient/>
    </main>
  );
}
