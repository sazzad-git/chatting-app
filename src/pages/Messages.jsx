import Chatting from "../Components/Chatting";
import Friends from "../Components/Friends";

const Messages = () => {
  return (
    <>
      <div className="grid grid-cols-[2fr,4fr]">
        <div className="w-full">
          <Friends />
        </div>
        <div className="mx-3">
          <Chatting />
        </div>
      </div>
    </>
  );
};

export default Messages;
