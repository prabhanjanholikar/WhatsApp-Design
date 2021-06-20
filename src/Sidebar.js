import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarheader">
                <Avatar />
                <div className="sidebarheaderRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebarsearch">
                <div className="sidebarsearchContainer">
                    <SearchOutlined />
                    <input placeholder="Search" type="text" />

                </div>
            </div>
            <div className="sidebar__chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            

            </div>

        </div>


    )
}

export default Sidebar