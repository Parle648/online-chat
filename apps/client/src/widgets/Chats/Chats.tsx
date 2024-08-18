import { useEffect } from "react";
import ChatEntity from "../../entities/ChatEntity/ChatEntity";
import getAllByUser from "./api/findAllByFilters";

const Chats = () => {
  useEffect(() => {
    getAllByUser();
  }, []);
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
