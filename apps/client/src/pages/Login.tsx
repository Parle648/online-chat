import Input from "../shared/UI/Input/Input.tsx";

const Login = () => {
  return (
    <main>
      Login page
      <Input
        title={"enter your email"}
        placeholder={"example@gmail.com"}
        name={"email"}
      />
      <Input title={"enter your password"} placeholder={""} name={"password"} />
    </main>
  );
};

export default Login;
