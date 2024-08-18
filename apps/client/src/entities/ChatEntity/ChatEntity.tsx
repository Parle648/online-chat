import styles from "./styles/chatEntity.module.scss";

const ChatEntity = ({
  isOnline,
  lastMessage,
  lastDate,
}: {
  isOnline: boolean;
  lastMessage: string;
  lastDate: string;
}) => {
  return (
    <div className={styles.chatEntity}>
      <div className={styles.img}>
        JD
        {isOnline && <div className={styles.isOnline}></div>}
      </div>
      <span className={styles.lastMessage}>{lastMessage}</span>
      <span className={styles.lastActivity}>{lastDate}</span>
    </div>
  );
};

export default ChatEntity;
