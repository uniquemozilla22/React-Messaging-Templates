import React from 'react'
import Message from './Message/Message'

const Messages = (props) => {
    let clas=["right-section"]
    let clas2=["right-section-bottom"]
    if(props.darktoggle)
    {
        clas.push("dark") 
        clas2.push("dark") 
    }
    
    return (
        <div className={clas.join(" ")}>
                <div className="message mCustomScrollbar" data-mcs-theme="minimal-dark">
                    <ul>
                    <Message by="me"></Message>
                    <Message by="day">Wednesday</Message>
                    <Message by="me"></Message>
                    <Message by=""></Message>
                    <Message by="me"></Message>
                    <Message by="day">Thursday</Message>
                    <Message by="me"></Message>
                    <Message by="me"></Message>
                    </ul>
                </div>
                <div className="right-section-bottom">
                    <form>
                        <div className="upload-btn">
                            <button className="btn"><i className="fa fa-photo"></i></button>
                            <input type="file" name="myfile" />
                        </div>
                        <input type="text" name="" placeholder="type here..."/>
                        <button className="btn-send"><i className="fa fa-send"></i></button>
                    </form>
                </div>
            </div>
    )
}

export default Messages;
