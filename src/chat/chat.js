import React, { useState, useRef } from "react";
import "./chatpage.css";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import LightModeIcon from "@mui/icons-material/LightMode";
import StopIcon from "@mui/icons-material/Stop";

const ChatApp = () => {
  const [chats] = useState([
    { id: 1, name: "General Group 🎉", lastMessage: "Dhruv: Planning a trip!", time: "10:45 AM" },
    { id: 2, name: "Family Chat 👨‍👩‍👦", lastMessage: "Mom: Dinner at 8 PM?", time: "9:00 PM" },
    { id: 3, name: "Friends ❤️", lastMessage: "Amit: Movie this Friday?", time: "5:30 PM" },
  ]);

  // 🔥 Store separate messages for each chat
  const [chatMessages, setChatMessages] = useState({
    1: [{ sender: "Krishna", text: "Hey! How are you?", time: "9:36 AM" }],
    2: [{ sender: "Mom", text: "Dinner at 8 PM?", time: "9:00 PM" }],
    3: [{ sender: "Amit", text: "Movie this Friday?", time: "5:30 PM" }],
  });

  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const [newMessage, setNewMessage] = useState("");

  // Audio Recording
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // 🔥 Handle Chat Selection
  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  // 🔥 Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newChatMessages = { ...chatMessages };
      newChatMessages[selectedChat.id] = [
        ...(newChatMessages[selectedChat.id] || []),
        { sender: "Me", text: "", image: imageUrl, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
      ];
      setChatMessages(newChatMessages);
    }
  };

  // 🔥 Start Audio Recording
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };
    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/mp3" });
      const audioUrl = URL.createObjectURL(audioBlob);
      const newChatMessages = { ...chatMessages };
      newChatMessages[selectedChat.id] = [
        ...(newChatMessages[selectedChat.id] || []),
        { sender: "Me", text: "", audio: audioUrl, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
      ];
      setChatMessages(newChatMessages);
    };
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  // 🔥 Stop Audio Recording
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  // 🔥 Send Text Message
  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const newChatMessages = { ...chatMessages };
    newChatMessages[selectedChat.id] = [
      ...(newChatMessages[selectedChat.id] || []),
      { sender: "Me", text: newMessage, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
    ];

    setChatMessages(newChatMessages);
    setNewMessage("");
  };

  return (
    <div className="chat-app light-theme">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <span className="lj">
          <img src="/assets/img/travel-tinder.png" style={{ width: "30px", height: "30px" }} alt="Logo" />
          <h2 style={{color:'black', fontWeight:'bold', fontFamily:"sans-serif"}}>Travel Tinder</h2></span>
          <div className="icons">
            <SearchIcon className="icon" />
            <LightModeIcon className="icon" />
          </div>
        </div>
        <div className="chat-list">
          {chats.map((chat) => (
            <div key={chat.id} className={`chat-item ${chat.id === selectedChat.id ? "active" : ""}`} onClick={() => handleChatClick(chat)}>
              <img src={`https://i.pravatar.cc/40?u=${chat.id}`} alt="Profile" />
              <div className="chat-info">
                <h4>{chat.name}</h4>
                <p>{chatMessages[chat.id]?.[chatMessages[chat.id]?.length - 1]?.text || "Start a conversation..."}</p>
              </div>
              <span className="chat-time">{chat.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        <div className="chat-header">
          <img src={`https://i.pravatar.cc/40?u=${selectedChat.id }`} alt="Group" />
          <h3>{selectedChat.name}</h3>
          <div className="icons">
            <SearchIcon className="icon" />
            <AttachFileIcon className="icon" />
            <MoreVertIcon className="icon" />
          </div>
        </div>

        <div className="chat-messages">
          {chatMessages[selectedChat.id]?.map((msg, index) => (
            <div key={index} className={msg.sender === "Me" ? "message sent" : "message received"}>
              {msg.text && <p>{msg.text}</p>}
              {msg.image && <img src={msg.image} alt="Sent" className="chat-image" />}
              {msg.audio && <audio controls src={msg.audio} />}
              <span className="time">{msg.time}</span>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <EmojiEmotionsIcon className="icon" />
          <input type="file" id="image-upload" hidden onChange={handleImageUpload} />
          <label htmlFor="image-upload">
            <AttachFileIcon className="icon" />
          </label>
          <input type="text" placeholder="Type a message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} />
          {isRecording ? (
            <StopIcon className="icon record-icon" onClick={stopRecording} />
          ) : (
            <MicIcon className="icon" onClick={startRecording} />
          )}
          <SendIcon className="icon send-icon" onClick={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
