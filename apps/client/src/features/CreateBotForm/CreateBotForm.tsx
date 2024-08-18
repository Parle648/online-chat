import Input from "../../shared/UI/Input/Input";

const CreateBotForm = () => {
  return (
    <form>
      <h2>Create bot form</h2>
      <Input title={"bot name"} placeholder={"John"} name={"bot_name"} />
      <Input title={"bot surname"} placeholder={"Doe"} name={"bot_surname"} />
    </form>
  );
};

export default CreateBotForm;
