import React,{Component} from 'react'
import Chats from './Chats/Chats'

class ChatList extends Component {
   
    render(){
        return (
            <div className="left-section mCustomScrollbar" data-mcs-theme="minimal-dark">
                    <ul>
                    <Chats name="Yogesh Bhattarai" status="active"/>
                    <Chats name='Una'/>
                    <Chats name="Yogesh" />  
                    <Chats name="Krishna"/>
                    <Chats name='Una' />
                    <Chats name="Yogesh" />
                    <Chats name="Krishna"/>
                    <Chats name='Una' />
                    <Chats name="Yogesh" />
                    <Chats name="Krishna"/>
                    </ul>
                </div>
        )
    }
   
}

export default ChatList;
