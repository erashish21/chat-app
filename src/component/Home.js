import React, { useState } from "react";
import "./Home.css";

function Home() {
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
          <div className="message">
            <div className="message_details">
              <div className="message-user">
                <span
                  className= "img green"
                >
                  E
                </span>
                <span className="username">Bob</span>
                <span className="time">12:34</span>
              </div>
              <div className="message-content">
                <span className="message-text">This is Sharzel</span>
                <i className="fa-solid fa-thumbs-up"></i> &nbsp;12
              </div>
            </div>
          </div>
        </div>
        <div className="input-container">
          <input
            type="text"  
            placeholder="Type your message..."
          />

          <button id="send">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
