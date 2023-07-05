import React, { useState } from "react";
import "./Home.css";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]; 

function Home() {
    const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      const randomUser =
        user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        username: randomUser,
        message: messageInput,
      };
      setMessages([...messages, newMessage]);
      setMessageInput("");
    }
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
          <span id="message">3/100</span>
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
                  className= "img green"
                >
                  {message.username.charAt(0)}
                </span>
                <span className="username">{message.username}</span>
                <span className="time">12:34</span>
              </div>
              <div className="message-content">
                <span className="message-text">{message.message}</span>
                <i className="fa-solid fa-thumbs-up"></i> &nbsp;12
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className="input-container">
          <input
          value={messageInput}
          onChange={handleInputChange}
            type="text"  
            placeholder="Type your message..."
          />

          <button onClick={handleSendMessage} id="send">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
