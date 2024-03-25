import { MdMessage } from "react-icons/md";

const Messages = () => {
  return (
    <>
      <div className="relative border-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 hover:cursor-pointer">
        <MdMessage className="text-xl" />
        <h3 className="text-[10px] text-white p-1 rounded-full bg-red-500 absolute -top-3 -right-2">
          10+
        </h3>
      </div>
    </>
  );
};

export default Messages;
