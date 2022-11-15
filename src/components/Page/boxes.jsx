import React from "react";

export default function Boxes({box}){
    return <div
        className="box"
        style={box.images ? {backgroundImage : `url(${box.images})`}: {backgroundColor : box.col}}>
        {box.text ? box.text: ""}
    </div>
}