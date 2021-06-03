import Link from "next/link";
import styles from "../styles/dashboard.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Dashboard!</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  );
}
