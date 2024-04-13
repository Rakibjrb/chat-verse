import { useParams } from "react-router-dom";

const ChatBox = () => {
  const { id } = useParams();

  return <div>Chat box {id}</div>;
};

export default ChatBox;
