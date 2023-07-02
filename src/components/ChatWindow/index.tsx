import "./Chatwindow.css";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import MicNoneIcon from "@mui/icons-material/MicNone";

import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const ChatWindow = () => {
  const [emojiOpen, setEmojiOpen] = useState(false);

  const handleEmojiClick = () => {};

  return (
    <div className="chatWindow">
      <div className="window--header">
        <div className="window--headerinfo">
          <img
            src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
            alt="avatar"
            className="window--avatar"
          />
          <div className="window-name">RamonDev</div>
        </div>

        <div className="window--headerbtn">
          <div className="window--btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="window--btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="window--btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div className="window--body">.</div>
      <div
        className="window--emojiarea"
      >
        {emojiOpen && (
          <div className="emoji-picker-container" >
            <EmojiPicker 
            searchDisabled 
            onEmojiClick={handleEmojiClick}
            height={'300px'}
            skinTonesDisabled
            
            />
          </div>
        )}
      </div>
      <div className="window--footer">
        <div className="window--left">
          <div className="window--btn" onClick={() => setEmojiOpen(!emojiOpen)}>
            <SentimentSatisfiedAltIcon style={{ color:emojiOpen? '#009688' : "#919191" }} />
          </div>
        </div>
        <div className="window--center">
          <input
            type="text"
            className="window-input"
            placeholder="Digite uma mensagem"
          />
        </div>
        <div className="window--right">
          <div className="window--btn">
            <SendIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
