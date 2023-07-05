import React, { useState, useRef } from "react";
import "./Home.css";

import Picker from "emoji-picker-react";


const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
// const color_list = ["green", "yellow", "red", "purple", "orange"];

function Home() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
const [selectedEmoji, setSelectedEmoji] = useState(null);
const emojiPickerRef = useRef(null);

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      const randomUser =
        user_list[Math.floor(Math.random() * user_list.length)];

      const hours = new Date().getHours();
      const minutes = new Date().getMinutes();
      const newMessage = {
        username: randomUser,
        message: messageInput,
        hours: hours,
        minutes: minutes,
        likes: 0,
      };
      setMessages([...messages, newMessage]);
      setMessageInput("");
    }
  };

  const handleLike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };

  const handleShowEmojiPicker = () => {
    if(showEmojiPicker == true){
        setShowEmojiPicker(false);
    }
    else{
        setShowEmojiPicker(true);
    }
    
  };
  

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    setMessageInput(messageInput + emoji.emoji);
  };
  

  const handleColor = (val) => {
    let ans = "";
    switch (val) {
      case "A":
        ans = "green";
        break;
      case "B":
        ans = "yellow";
        break;
      case "C":
        ans = "red";
        break;
      case "D":
        ans = "purple";
        break;
      case "E":
        ans = "orange";
        break;
      default:
        ans = "red";
        break;
    }
    return ans;
  };

  return (
    <div className="home">
      <div id="header">
        <div id="header_detail">
          <span id="header_detail_name">Introductions</span>
          <span id="header_detail_disc">
            This Channel is For Company Wide Chatter
          </span>
        </div>
        <div id="message_detail">
          <span id="message">{messages.length}/100</span>
          <i className="fa-solid fa-user-group"></i>
        </div>
      </div>
      <div className="chat-container">
        <div className="message-thread">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <div className="message_details">
                <div className="message-user">
                  <span
                    className={`img ${handleColor(message.username.charAt(0))}`}
                  >
                    {message.username.charAt(0)}
                  </span>
                  <span className="username">{message.username}</span>
                  <span className="time">
                    {message.hours}:{message.minutes}
                  </span>
                </div>
                <div className="message-content">
                  <span className="message-text">{message.message}</span>
                  <i
                    onClick={() => handleLike(index)}
                    className="fa-solid fa-thumbs-up"
                  ></i>{" "}
                  &nbsp;{message.likes}
                </div>
              </div>
            </div>
          ))}
        </div>
        {showEmojiPicker && (
      <div ref={emojiPickerRef} className="emoji-picker-container">
        <Picker
          onEmojiClick={handleEmojiSelect}
          disableSearchBar
          native
          emojiTooltip
          pickerStyle={{ width: 'auto' }}
        />
      </div>
    )}

        <div className="input-container">
          <input
            value={messageInput}
            onChange={handleInputChange}
            type="text"
            placeholder="Type your message..."
          />
          <i style={{marginTop:"0.6rem",marginLeft:"-2rem",marginRight:'3rem',fontSize:'1.2rem'}} onClick={handleShowEmojiPicker} className="fa-solid fa-grin"></i>
          <i
          style={{marginRight:"0.8rem",marginLeft:"-1rem",fontSize:'1.4rem'}}
            onClick={handleSendMessage}
            id="send"
            class="fa-solid fa-paper-plane"
          ></i>
        </div>
      </div>
    </div>
  );
}
export default Home;
