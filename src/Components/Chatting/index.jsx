const Chatting = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="py-4 bg-[#212121] px-6">
          <div className="flex items-center gap-x-2">
            <div className="w-10 ml-2 h-10 rounded-full bg-orange-200 overflow-hidden"></div>
            <div>
              <span className="font-fontRegular text-white">
                Sazzadur Rahman
              </span>
            </div>
          </div>
        </div>
        <div className="h-[450px] bg-white "></div>
        <div className="bg-white w-[532px]">
          <input placeholder="type something" type="text" />
        </div>
      </div>
    </>
  );
};

export default Chatting;
