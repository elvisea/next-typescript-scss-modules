import Link from "next/link";
import styles from "../styles/404.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Erro 404! Página Não Encontrada!</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  );
}
