import React from 'react'


const Message = (props) => {
    let messageclass=""
    let day;
    if(props.by==="me")
    {
        messageclass="msg-right"
    }
    else if (props.by==="day")
    {
       day=<li class="msg-day"><small>{props.children}</small></li>
    }
    else{
        messageclass="msg-left "
    }
    let chat =<li className={messageclass}>
    <div className="msg-left-sub">
        <img src="#"/>
        <div className="msg-desc">
            This is a message that i need to send to you.
        </div>
        <small>05:25 am</small>
    </div>
</li>;

let printing;

if (props.by==="day")
{
printing=day
}
else{
    printing=chat
}
    return (
        <div>
             {printing}
        </div>
    )
}

export default Message;
