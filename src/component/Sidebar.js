import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div id="sidebar">
      <div id="user_detail">
        <span id="img">RR</span>
        <span id="green"></span>
        <div id="username">
          <span id="name">Rolande Raimondi</span>
          <span>Research Nurse</span>
        </div>
      </div>
      <div id="conversation">
        <div id="conversation_name">
          <span>Conversations</span>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="conversation_item">
          <span className="item_img" style={{backgroundColor:"yellow"}}>#</span>
          <span className="item_name">Poland Office</span>
        </div>
        <div className="conversation_item" id="introduction">
          <span className="item_img" id="intro">
            #
          </span>
          <span className="item_name">Introduction</span>
        </div>
        <div className="conversation_item">
          <span className="item_img" style={{backgroundColor:"purple"}}>#</span>
          <span className="item_name">India Office</span>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;