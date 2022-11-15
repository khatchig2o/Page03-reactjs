import React from "react";

export default function Box2({icon}){
    return <div className="Box2">
            <img src={icon} alt="icon"/>
            <h2>Lorem Ipsum</h2>
            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
            <button>Read More</button>
    </div>
}