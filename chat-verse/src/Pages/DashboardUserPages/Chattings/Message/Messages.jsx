import MessageList from "./MessageList";
import Logo from "../../../../assets/Logo/Logo.png";

const Messages = () => {
  return (
    <>
      <div className="hidden font-rubik w-full h-full md:flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <img src={Logo} alt="logo" />
          <h2 className="text-xl mb-5">Chat with your</h2>
          <h1 className="text-6xl text-green-400">Friends.</h1>
        </div>
      </div>

      <div className="md:hidden">
        <MessageList />
      </div>
    </>
  );
};

export default Messages;
