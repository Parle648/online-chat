import ChatEntity from "../../entities/ChatEntity/ChatEntity";

const Chats = () => {
  return (
    <div>
      <ChatEntity
        isOnline={false}
        lastMessage={"Hello"}
        lastDate={"11.02.2024"}
      />
      <ChatEntity
        isOnline={true}
        lastMessage={"Hello"}
        lastDate={"11.02.2024"}
      />
      <ChatEntity
        isOnline={true}
        lastMessage={"Hello"}
        lastDate={"11.02.2024"}
      />
      <ChatEntity
        isOnline={false}
        lastMessage={"Hello"}
        lastDate={"11.02.2024"}
      />
    </div>
  );
};

export default Chats;
