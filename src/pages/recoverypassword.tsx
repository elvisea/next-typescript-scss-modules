import Link from "next/link";
import styles from "../styles/recoverypassword.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Recovery Password!</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  );
}
