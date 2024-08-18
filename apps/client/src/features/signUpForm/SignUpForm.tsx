import Button from "../../shared/UI/Button/Button";
import Input from "../../shared/UI/Input/Input";
import styles from "./styles/signUp.module.scss";
import LinkElem from "../../shared/UI/Link/Link";

const SignUpForm = () => {
  return (
    <form className={styles.form}>
      <Input title={"enter your name"} placeholder={"Alex"} name={"name"} />
      <Input
        title={"enter your surname"}
        placeholder={"Doe"}
        name={"surname"}
      />
      <Input
        title={"enter your email"}
        placeholder={"example@gmail.com"}
        name={"email"}
      />
      <Input title={"enter your password"} placeholder={""} name={"password"} />
      <br />
      <Button type={"submit"}>Sign up</Button>
      <LinkElem path="/auth/login">login</LinkElem>
    </form>
  );
};

export default SignUpForm;
