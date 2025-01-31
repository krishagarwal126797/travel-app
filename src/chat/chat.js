import React, { useState } from "react";
import "./chatpage.css";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NavbarComp from "../views/Navbar";
import SideBar from "../views/sidebar";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { sender: "Amit", text: "Hallo! you are intrested for tour", time: "16:45" },
    { sender: "Me", text: "Hallo! 😊 yes i am!", time: "16:48" },
    { sender: "amit", text: "ooho its good we find new member for our team", time: "16:55" },
    { sender: "Me", text: "how many member are currenty in this team 🏠", time: "17:01" },
    { sender: "Me", text: "and how many budget and which palce are there where i travel", time: "17:15" },
    { sender: "amit", text: "only 4 member and WE tour at vrindavan ", time: "17:19" },
    { sender: "Me", text: "Okay super ! i am happy to travel with you 😊", time: "17:20" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    setMessages([...messages, { sender: "Me", text: newMessage, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }]);
    setNewMessage("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div>
    <NavbarComp />
    <section className="chatpage">
    
    <div className="chat-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="https://i.pravatar.cc/40" alt="User" className="profile-pic" />
          <span>Krishna Garg</span>
          <SearchIcon className="icon" />
        </div>
        <div className="chat-list">
          <div className="chat-item selected">
            <img src="https://i.pravatar.cc/40" alt="amit" />
            <div className="chat-info">
              <h4>Travelar for vrindavan</h4>
              <p>happy 😊</p>
            </div>
            <span className="chat-time">17:21</span>
          </div>
          <div className="chat-item selected">
            <img src="https://i.pravatar.cc/40" alt="amit" />
            <div className="chat-info">
              <h4>Agra (king of travel)</h4>
              <p> hey there! i am useing whatsapp 😊</p>
            </div>
            <span className="chat-time">17:21</span>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        <div className="chat-header">
          <img src="https://i.pravatar.cc/40" alt="Profile" />
          <h3>Travelar for vrindavan</h3>
          <p>happy 17:21</p>
          <SearchIcon className="icon" />
          <label htmlFor="file-input">
            <AttachFileIcon className="icon" />
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} onChange={handleFileChange} />
          <MoreVertIcon className="icon" />
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === "Me" ? "message sent" : "message received"}>
              <p>{msg.text}</p>
              <span className="time">{msg.time}</span>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Schreibe eine Nachricht..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} />
          <MicIcon className="icon" />
        </div>
      </div>
    </div>
    </section>
    </div>
  );
};

export default ChatApp;
