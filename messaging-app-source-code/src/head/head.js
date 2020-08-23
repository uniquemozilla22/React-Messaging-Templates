import React from 'react'
import  './head.css'

const head = (props) => {
    let clas=["head-section"]
    if(props.darktoggle)
    {
      clas.push("dark") 
    }
    
    return (
        <div className={clas.join(" ")}>
            <div className="headLeft-section">
                <div className="headLeft-sub">
                    <input type="text" name="search" placeholder="Search..."/>
                    <button> <i className="fa fa-search"></i> </button>
                </div>
            </div>
            <div className="headRight-section">
                <div className="headRight-sub">
                    <h3>{props.name}</h3>
                    <small>{props.status}</small>
                </div>
            </div>
        </div>

    )
}

export default head;
