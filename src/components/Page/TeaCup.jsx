import React from "react";

export default function TeaCup({cup}){
    return <div className='G-backgroundimg teaCup' style={{backgroundImage:`url(${cup.image})`}}></div>
}