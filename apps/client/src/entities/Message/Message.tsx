import styles from "./styles/message.module.scss";

const Message = ({
  message,
  time,
  isMine,
}: {
  message: string;
  time: string;
  isMine: boolean;
}) => {
  return (
    <div className={isMine ? styles.ownMessage : styles.friendMessage}>
      <div className={styles.messageContent}>
        <p>{message}</p>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  );
};

export default Message;
