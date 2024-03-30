import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const LoginViews = () => {
  //   const router = useRouter();
  const { push } = useRouter();
  const handleLogin = () => {
    // router.push("/product");
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1>Login Page</h1>
      <div>
        <button onClick={() => handleLogin()}>login</button>
      </div>
      <p style={{ color: "red", border: "1px solid red", borderRadius: "10px" }}>
        Belum punya akun? registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
