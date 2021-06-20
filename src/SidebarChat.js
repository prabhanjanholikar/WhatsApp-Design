import React from 'react'
import "./sidebarChat.css"
import { Avatar } from '@material-ui/core';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>

          <div className="sidebarChatInfo">
              <h2>Room name</h2>
              <p>last message</p>
              
              </div>  
        </div>
    )
}

export default SidebarChat
