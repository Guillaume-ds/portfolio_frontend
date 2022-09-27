import { useState, useEffect } from "react";
import { ScrollDownArrows } from "../utils";

const WritingText = () => {
    const [display, setDisplay] = useState('text-transparent')
    const [display2, setDisplay2] = useState('hidden')
    const [display3, setDisplay3] = useState('hidden')
    const [display4, setDisplay4] = useState('hidden')

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    var changeDisplay = async function () {
        setDisplay("");
        await sleep(200)
        setDisplay2("");
        await sleep(200)
        setDisplay3("");
        await sleep(200)
        setDisplay4("");
    };
    
    setTimeout(changeDisplay, 1100);
    return(
        <div className="h-full mx-auto w-100 text-blue-50 pb-10 commandPromt">
            <div className={"h-10 mb-5 grid grid-cols-4 content-center commandPromtTop "}>
                <p className="ml-5 col-span-3">Command Promt</p>
                <p className="justify-self-end mr-5 col-span-1">X</p>
            </div>

            <h1 id="typingText" 
                className="
                mb-10 mt-0 lg:pt-4
                px-2 md:px-6 xl:pl-10
                text-xl md:text-4xl xl:text-5xl 
                font-bold typingText ">
                Guillaume de Surville
            </h1>
            <p className={display + " md:text-xl lg:text-2xl mb-10 px-1 md:px-12 xl:px-20 font-bold"}>
                MSc Data Science for business at <em>Polytechnique</em> and <em>HEC Paris</em>
            </p>    
            <p className={display2 + " md:text-xl  lg:text-2xl mb-10 px-1 md:px-12 xl:px-20 font-bold"}> 
                Efficient in Python and Javascript
            </p>
            <p className={display3 + " md:text-xl lg:text-2xl mb-10 px-1 md:px-12 xl:px-20 font-bold"}> 
                Currently looking for an internship
            </p>
            <span className={display4 + " w-0 h-5 md:pl-12 xl:pl-20 text-lg lg:text-xl blinkingText"}>&nbsp;</span>

            <p className={display4 + " text-center md:mt-14 mt-7"}>
                <a href="#Prez" >
                <span className={display4 + "arrowBottom mr-5"}></span>
                <span className={display4 + " text-indigo-50"}>See more below</span>
                <span className={display4 + "arrowBottom ml-5"}></span>
                </a>
            </p>
        </div>
    )
}


export default WritingText;