import "./newchat.css";
import {useState} from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IChatList, IUser } from "../../types";

interface INewChat {
    showNewChat: boolean;
    setShowNewChat: (props: boolean) => void;
    user: IUser;
    chatList: IChatList[]
  }

const NewChat = ({ showNewChat, setShowNewChat, user }: INewChat) => {
    
    const [list, setList] = useState([
        {
            id: 12,
            avatar: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
            name: 'Ramon'
        },
        {
            id: 12,
            avatar: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
            name: 'Ramon'
        },{
            id: 12,
            avatar: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
            name: 'Ramon'
        },{
            id: 12,
            avatar: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
            name: 'Ramon'
        }
    ])
  return (
    <div className="newchat" style={{left: showNewChat ? 0 : '-320px'}}>
      <div className="newchat--header">
        <div className="newchat--backbtn" onClick={() =>setShowNewChat(false)}>
          <ArrowBackIcon style={{ color: "#fff" }} />
        </div>
        <div className="newchat--headertitle">Nova Conversa</div>
      </div>
      <div className="newchat--list">
        {list.map(item =>(
            <div className="newchat--item" key={item.id}>
                <img src={item.avatar} alt="avatar" />
                <div className="newchat--itemname">
                    {item.name}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default NewChat;
