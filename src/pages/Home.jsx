import UserLists from "../Components/UserList";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-[2fr,4fr]">
        <div className="w-full">
          <UserLists />
        </div>
        <div className="w-full grid grid-cols-2 gap-x-20">
          <div>absdhj</div>
          <div>absdhj</div>
        </div>
      </div>
    </>
  );
};

export default Home;
