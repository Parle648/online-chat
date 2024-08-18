import Message from "../../entities/Message/Message";
import Button from "../../shared/UI/Button/Button";
import Input from "../../shared/UI/Input/Input";
import styles from "./styles/chat.module.scss";

const ChatBlock = () => {
  return (
    <div className={styles.block}>
      <Message message={"Hello"} time={"time"} isMine={false} />
      <Message message={"Hey"} time={"time"} isMine={true} />
      <Input title={""} placeholder={""} name={""} />
      <Button type={"submit"}>send</Button>
    </div>
  );
};

export default ChatBlock;
