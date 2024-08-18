import Button from "../../shared/UI/Button/Button";
import Input from "../../shared/UI/Input/Input";
import styles from "./styles/signUp.module.scss";
import LinkElem from "../../shared/UI/Link/Link";
import createUser from "./api/createUser";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<{
    name: string;
    surname: string;
    email: string;
    password: string;
  }>();

  const createUserRequest = (data: {
    name: string;
    surname: string;
    email: string;
    password: string;
  }) => {
    createUser(data);
  };
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) => createUserRequest(data))}
    >
      <Input
        title={"enter your name"}
        placeholder={"Alex"}
        register={{ ...register("name") }}
      />
      <Input
        title={"enter your surname"}
        placeholder={"Doe"}
        register={{ ...register("surname") }}
      />
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
      <Button type={"submit"}>Sign up</Button>
      <LinkElem path="/auth/login">login</LinkElem>
    </form>
  );
};

export default SignUpForm;
