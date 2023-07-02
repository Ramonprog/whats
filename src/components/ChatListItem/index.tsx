import { IChatList } from "../../types";
import "./chatListItem.css";

interface ChatListItemProps extends IChatList {
  active: boolean;
}

const ChatListItem = ({click, active, title, image}: ChatListItemProps) => {
  return (
    <div className={`chatListItem ${active ? 'active' : ''}`} onClick={click}>
      <img className="chat--avatar" src={image} alt="avatar" />
      <div className="chat--lines">
        <div className="chat--line">
          <div className="chat--name">{title}</div>
          <div className="chat--date">10:00</div>
        </div>
        <div className="chat--line">
          <div className="chat--lastMsg">
            <p>Hojé é festa lá no meu ap, pode aparecer que vai rolar bunda lele</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
