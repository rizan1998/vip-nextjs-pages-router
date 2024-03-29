import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const LoginPage = () => {
  //   const router = useRouter();
  const { push } = useRouter();
  const handlerLogin = () => {
    // router.push("/product");
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1>Login Page</h1>
      <div>
        <button onClick={() => handlerLogin()}>login</button>
      </div>
      Belum punya akun? registrasi <Link href={"/auth/register"}>disini</Link>
    </div>
  );
};

export default LoginPage;
