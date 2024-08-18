import User from "../entities/User/User";
import CreateBotForm from "../features/CreateBotForm/CreateBotForm";
import ChatBlock from "../widgets/ChatBlock/ChatBlock";
import Chats from "../widgets/Chats/Chats";
import SearchBlock from "../widgets/SearchBlock/SearchBlock";

const Main = () => {
  return (
    <main className="main-page">
      <div style={{ width: "350px" }}>
        <User />
        <SearchBlock />
        <CreateBotForm />
        <Chats />
      </div>
      <ChatBlock />
    </main>
  );
};

export default Main;
