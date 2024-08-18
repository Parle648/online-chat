import Button from "../../shared/UI/Button/Button.tsx";
import Input from "../../shared/UI/Input/Input.tsx";
import LinkElem from "../../shared/UI/Link/Link.tsx";
import styles from "./styles/login.module.scss";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <Input
        title={"enter your email"}
        placeholder={"example@gmail.com"}
        name={"email"}
      />
      <Input title={"enter your password"} placeholder={""} name={"password"} />
      <br />
      <Button type={"submit"}>Login</Button>
      <LinkElem path="/auth/sign-up">sign up</LinkElem>
    </form>
  );
};

export default LoginForm;
