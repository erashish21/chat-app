import React, { useState } from "react";
import "./Home.css";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]; 
// const color_list = ["green", "yellow", "red", "purple", "orange"];

function Home() {
    const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      
      const hours = new Date().getHours();
      const minutes = new Date().getMinutes();
      const newMessage = {
        username: randomUser,
        message: messageInput,
        hours:hours,
        minutes:minutes,
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

  const handleColor = (val) =>{
    let ans = "";
    switch (val) {
        case 'A':
            ans = 'green';
            break;
        case 'B':
            ans = "yellow";
            break;
        case 'C':
            ans = "red";
            break;
        case 'D':
            ans = "purple";
            break;
        case 'E':
            ans = "orange";
            break;
        default:
            ans = 'red';
            break;
    }
    return ans;
  }


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
                  className= {`img ${handleColor(message.username.charAt(0))}`}
                >
                  {message.username.charAt(0)}
                </span>
                <span className="username">{message.username}</span>
                <span className="time">{message.hours}:{message.minutes}</span>
              </div>
              <div className="message-content">
                <span className="message-text">{message.message}</span>
                <i onClick={()=> handleLike(index)} className="fa-solid fa-thumbs-up"></i>{" "} &nbsp;{message.likes}
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
            <i onClick={handleSendMessage} id="send" class="fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
}
export default Home;
