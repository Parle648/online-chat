import Input from "../../shared/UI/Input/Input";

const SearchBlock = () => {
  return (
    <div>
      <Input
        title={"Find new people for chating"}
        placeholder={"search"}
        name={"search"}
      />
      <div className="span3" title="Code: 0xe801">
        <i
          className="icon-search-icon"
          style={{ position: "absolute", top: "64px", left: "350px" }}
        >
          &#xe801;
        </i>
      </div>
    </div>
  );
};

export default SearchBlock;
