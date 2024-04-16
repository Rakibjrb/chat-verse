import { useEffect, useRef } from "react";
import { MdSend, MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const messages = {
  chatId: "thisischatid",
  chats: [
    { id: "1", content: "Hi", date: "10-02-24", user: "rakibul hasan" },
    {
      id: "2",
      content: "Hello. How are you?",
      date: "10-02-24",
      user: "refayet hasan",
    },
    {
      id: "3",
      content: "I am fine. You?",
      date: "10-02-24",
      user: "rakibul hasan",
    },
    {
      id: "4",
      content: "I am also fine.",
      date: "10-02-24",
      user: "refayet hasan",
    },
    {
      id: "10",
      content: "Write your favourite song",
      date: "10-02-24",
      user: "refayet hasan",
    },
    {
      id: "11",
      content:
        "onk kotha hoini bola, holona eki, pothe chola, bojhate parina, ei bekulota, shunteki parona hridoye barota, mone thakbe ki, ami k chilam, muche felbe ki amar naaaam. che felbe ki amar naaaam.",
      date: "10-02-24",
      user: "rakibul hasan",
    },
    {
      id: "11",
      content:
        "onk kotha hoini bola, holona eki, pothe chola, bojhate parina, ei bekulota, shunteki parona hridoye barota, mone thakbe ki, ami k chilam, muche felbe ki amar naaaam. che felbe ki amar naaaam.",
      date: "10-02-24",
      user: "refayet hasan",
    },
    {
      id: "6",
      content: "Tell me your favourite female actor name",
      date: "10-02-24",
      user: "refayet hasan",
    },
    {
      id: "7",
      content: "My favourite female actor name is Totini",
      date: "10-02-24",
      user: "rakibul hasan",
    },
    {
      id: "8",
      content: "Tell me your favourite female actor name",
      date: "10-02-24",
      user: "rakibul hasan",
    },
    {
      id: "9",
      content: "Same, I like her too.",
      date: "10-02-24",
      user: "refayet hasan",
    },
  ],
};

const ChatBox = () => {
  const user = "rakibul hasan";
  const chatboxRef = useRef();

  useEffect(() => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, []);

  return (
    <div className="h-[calc(100vh-86px)] relative p-2 bg-white rounded-lg">
      {/* chat header */}
      <div className="flex items-center justify-between pr-3">
        <Link to={"/home/chattings"}>
          <button className="p-2 rounded-full hover:bg-slate-100 transition-all">
            <MdArrowBack className="text-3xl text-black" />
          </button>
        </Link>
        <div className="flex gap-2 items-center flex-row-reverse">
          <img
            className="w-8 h-8 xl:w-10 xl:h-10"
            src={"https://i.ibb.co/5x441PC/user.png"}
            alt="user image"
          />
          <h2 className="uppercase xl:text-xl">{"ChatVerse User"}</h2>
        </div>
      </div>

      {/* chat contents */}
      <div
        ref={chatboxRef}
        id="chatContent"
        className="w-full h-[calc(100vh-230px)] pt-4 overflow-y-scroll"
      >
        <div className="flex flex-col gap-3 w-full">
          {messages?.chats?.map((chat, index) => (
            <div
              key={`chating${index}`}
              className={`flex  ${
                chat.user === user ? "justify-end text-right" : "justify-start"
              }`}
            >
              <div className={`space-y-1 w-[95%] md:w-[85%] lg:w-[70%]`}>
                <p
                  className={`py-4 px-5 inline-block bg-green-400 rounded-t-3xl ${
                    chat?.user === user ? "rounded-bl-3xl" : "rounded-br-3xl"
                  } text-xl`}
                >
                  {chat?.content}
                </p>

                <p className="text-sm text-gray-400 mt-2">{chat?.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* chatting box section */}
      <div className="absolute bottom-4 left-0 w-full flex items-center px-4">
        <input
          className="w-full rounded-l-lg bg-slate-100 outline-none text-gray-600 py-2 px-3 text-2xl"
          type="text"
          placeholder="type here ..."
          required
        />
        <button className="py-2 px-3 bg-green-400 rounded-r-lg">
          <MdSend className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
