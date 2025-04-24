import FriendRequest from "../Components/FriendRequest";
import Friends from "../Components/Friends";
import UserLists from "../Components/UserList";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-[2fr,4fr]">
        <div className="w-full">
          <UserLists />
        </div>
        <div className="w-full grid grid-cols-2 gap-x-2">
          <div>
            <FriendRequest />
          </div>
          <div>
            <Friends />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
