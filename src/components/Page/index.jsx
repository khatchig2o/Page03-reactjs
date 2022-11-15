import React from "react";
import Boxes from "./boxes";
import Box2 from "./box2";
import TeaCup from "./TeaCup";
import Background from "../../assets/images/1st-background.jpg"
import image1 from "../../assets/images/1st-pic.jpg"
import image2 from "../../assets/images/2nd-pic.jpg"
import image3 from "../../assets/images/3rd-pic.jpg"
import cup from "../../assets/images/cup.svg"
import leaf from "../../assets/images/leaf.svg"
import window from "../../assets/images/window.svg"
import Background2 from "../../assets/images/2nd-background.jpg"

import cup1 from "../../assets/images/1.jpg"
import cup2 from "../../assets/images/2.jpg"
import cup3 from "../../assets/images/3.jpg"
import cup4 from "../../assets/images/4.jpg"
import cup5 from "../../assets/images/5.jpg"
import cup6 from "../../assets/images/6.jpg"
import cup7 from "../../assets/images/7.jpg"
import cup8 from "../../assets/images/8.jpg"


const boxes=[
    {"col"    : "#B62B52" , "text" : "Drink Tea & \n Enjoy"},
    {"images" : image1},
    {"col"    : "#769D2A" , "text" : "Smell flowers & \n Enjoy"},
    {"images" : image2},
    {"col"    : "#01A0A6" , "text" : "How to Live & \n Enjoy Life"},
    {"images" : image3},

]
const cups = [
    {"image" :cup1},
    {"image" :cup2},
    {"image" :cup3},
    {"image" :cup4},
    {"image" :cup5},
    {"image" :cup6},
    {"image" :cup7},
    {"image" :cup8}
]

export default function Page(){
    return <>
        <header  style={{backgroundImage : `url(${Background})`}}>
            <div className="G-container">
                <h1>Tea Flower</h1>
                <ul>
                    <li>Active</li>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                </ul>
                <div className="G-flex-wrap">
                    {boxes.map((box,index)=>(
                        <Boxes
                            box={box}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </header>
        <section className="section1">
            <div className="G-container">
                <h2>Why do we use it</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall ey of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <button type="submit">READ MORE</button>
            </div>
        </section>
        <section>
            <div className="G-container G-flex-wrap section2">
                <Box2 icon = {leaf}/>
                <Box2 icon = {cup}/>
                <Box2 icon = {window}/>
            </div>
        </section>
        <section className="section3" style={{backgroundImage : `url(${Background2})`}}>
            <div className="G-container">
                <p>There are many variations of passages of Lorem Ipsum available?</p>
                <div className="G-center">
                    <button>Read more</button>
                </div>
            </div>
        </section>
        <section className="section4 G-container">
            <h2>Choose your cup of tea</h2>
            <div className="G-flex-wrap teacontainer">
                {cups.map((cup,index)=>(
                    <TeaCup cup={cup} key={index}/>
                ))}
            </div>
        </section>
    </>
}