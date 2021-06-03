import Link from "next/link";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerForm}>
          <h1>Faça seu login</h1>

          <form action="">
            <label htmlFor="">Name</label>
            <input type="email" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <button>Login</button>
          </form>

          <div className={styles.containerLinks}>
            <Link href="/recoverypassword">
              <a>
                <span>Esqueci minha senha</span>
              </a>
            </Link>
            <Link href="/signup">
              <a>
                <span>Ainda não sou cliente</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
