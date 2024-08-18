import Chats from "../widgets/Chats/Chats";
import SearchBlock from "../widgets/SearchBlock/SearchBlock";

const Main = () => {
  return (
    <main className="main-page">
      <div style={{ width: "350px" }}>
        <SearchBlock />
        <Chats />
      </div>
    </main>
  );
};

export default Main;
