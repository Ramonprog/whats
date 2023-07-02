import { ChatList } from "../../types";
import "./chatListItem.css";

const ChatListItem = ({click}: ChatList) => {
  return (
    <div className="chatListItem" onClick={click}>
      <img className="chat--avatar" src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" alt="" />
      <div className="chat--lines">
        <div className="chat--line">
          <div className="chat--name">RamonDev</div>
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
