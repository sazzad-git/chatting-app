import { AddFriendIcon } from "../../svg/AddFriend";

const UserLists = () => {
  return (
    <>
      <div className="px-8 pt-3 bg-[#FBFBFB] h-[550px]">
        <h1 className="font-fontBold text-black text-xl">All Users</h1>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 rounded-full bg-purple-600 overflow-hidden"></div>
            <h3 className="font-fontRegular text-black text-lg">
              Sazzadur Rahman
            </h3>
          </div>
          <div className="text-black cursor-pointer">
            <AddFriendIcon />
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 rounded-full bg-purple-600 overflow-hidden"></div>
            <h3 className="font-fontRegular text-black text-lg">
              Sazzadur Rahman
            </h3>
          </div>
          <div className="text-black cursor-pointer">
            <AddFriendIcon />
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 rounded-full bg-purple-600 overflow-hidden"></div>
            <h3 className="font-fontRegular text-black text-lg">
              Sazzadur Rahman
            </h3>
          </div>
          <div className="text-black cursor-pointer">
            <AddFriendIcon />
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 rounded-full bg-purple-600 overflow-hidden"></div>
            <h3 className="font-fontRegular text-black text-lg">
              Sazzadur Rahman
            </h3>
          </div>
          <div className="text-black cursor-pointer">
            <AddFriendIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLists;
