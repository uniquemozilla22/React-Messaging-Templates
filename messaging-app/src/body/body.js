import React from 'react'
import './body.css'
import ChatList from './ChatList/ChatList'
import Messages from './Messages/Messages'

const body = (props) => {
    return (
        <div className="body-section">
            <ChatList />
            <Messages darktoggle={props.darktoggle}/>
        </div>
    )
}

export default body;
