import React from 'react'
import Avatar from '@material-ui/core/Avatar'

const Chats = (props) => {

    

    return (
        <div>
            <li className={props.status}>
                        <div className="chatList">
                            <div className="img">
                                <i className="fa fa-circle"></i>
                                <Avatar/>
                            </div>
                            <div className="desc">
                                <small className="time">11:11 AM</small>
                                <h5>{props.name}</h5>
                                <small>Lorem ipsum dolor sit amet...</small>
                            </div>
                        </div>
                    </li>
        </div>
    )
}

export default Chats;
