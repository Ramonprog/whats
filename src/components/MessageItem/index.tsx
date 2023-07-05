import { IMsgList, IUser } from "../../types";
import "./messageItem.css";

interface IMessage {
  data: IMsgList;
  user: IUser;
}

const MessageItem = ({ data, user }: IMessage) => {
  console.log(data);
  return (
    <div
      className="messageLine"
      style={{
        justifyContent: user.id === data.author ? "flex-end" : "flex-start",
      }}
    >
      <div
        className="messageItem"
        style={{
          backgroundColor: user.id === data.author ? "#dcf8c6" : "#fff",
        }}
      >
        <div className="messageText">{data.message}</div>
        <div className="messageDate">19:00</div>
      </div>
    </div>
  );
};

export default MessageItem;
