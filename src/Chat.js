import React, { useState} from "react";
import "./Chat.css"
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined, MoreVert } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import axios from './axios';

function Chat({messages}) {

        const [input,setInput] =  useState("");


    const sendMessage = async  (e) =>{
        e.preventDefault();

        axios.post('/messages/new',{

            
                message :input,
                name:"Prabhanjan",
                timestamp:"abddddc",
                received: false
            });

            setInput("");
    };
    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>last seen at</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">

            {messages.map((message) => (
                <p className={`chat__message ${message.received && "chat__received"}`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">
                    {message.timestamp}
                    </span>
                    

                </p>
                     ))}
               
               

            </div>
            <div className="chat__footer">
                <IconButton>
                <InsertEmoticonIcon/>
                </IconButton>
                <form>
                    <input value = {input} onChange = {e=> setInput(e.target.value)}
                   placeholder="type a message"
                   type= "text"/>
                   <button onClick = {sendMessage}  type="submit">send</button>
                    
                </form>
                <IconButton>
                <MicNoneOutlinedIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
