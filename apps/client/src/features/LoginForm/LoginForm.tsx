import { useForm } from "react-hook-form";
import Button from "../../shared/UI/Button/Button.tsx";
import Input from "../../shared/UI/Input/Input.tsx";
import LinkElem from "../../shared/UI/Link/Link.tsx";
import styles from "./styles/login.module.scss";
import login from "./api/logn.ts";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) => login(data))}
    >
      <Input
        title={"enter your email"}
        placeholder={"example@gmail.com"}
        register={{ ...register("email") }}
      />
      <Input
        title={"enter your password"}
        placeholder={""}
        register={{ ...register("password") }}
      />
      <br />
      <Button type={"submit"}>Login</Button>
      <LinkElem path="/auth/sign-up">sign up</LinkElem>
    </form>
  );
};

export default LoginForm;
