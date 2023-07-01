import "./App.css";
import {useState, useEffect} from 'react'
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ChatListItem from "./components/ChatListItem/chatListItem";



function App() {
  const [chatList, setChatList] = useState([{},{},{},{}])

  return (
    <>
      <div className="app-window">
        <div className="sidebar">
          <header>
            <img
              className="header-avatar"
              src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
              alt="avatar"
            />
            <div className="header-buttons">
              <div className="header--btn">
                <DonutLargeIcon style={{ color: "#919191" }} />
                <ChatIcon style={{ color: "#919191", marginLeft:'8px' }} />
                <MoreVertIcon style={{ color: "#919191",marginRight:'8px' }} />
              </div>
            </div>
          </header>
          <div className="search">
            <div className="search--input">
              <SearchIcon style={{ color: "#919191" }} fontSize="small" />
              <input
                type="search"
                placeholder="Procurar ou começar uma nova conversa"
              />
            </div>
          </div>
          <div className="chatlist">
            {chatList.map((item, key) => (
              <ChatListItem key={key}/>
            ))}
          </div>
        </div>
        <div className="contentarea">...</div>
      </div>
    </>
  );
}

export default App;
