import React, { useEffect, useCallback } from "react";
import PersonalCard from "./personalCard";
import WritingText from "./writingText";
import { ScrollDownArrows } from "../utils";


const Jumbotron = () => {
    
    return(
        <div className="
            grid lg:grid-cols-5 
            gap-x-4 gap-y-0 
            content-center content-around 
            jumbotronBackground"
            id="jumbotron"
            >

            <div className="
                lg:col-span-2 
                mx-auto w-full 
                px-5 lg:px-10 
                mt-20 lg:mt-0 ">
                <PersonalCard />
            </div>
            
            <div className="
                lg:col-span-3 
                mx-auto w-full 
                px-5 lg:px-14 
                lg:my-0 my-7 ">
                <WritingText />
            </div>
            
        </div>
    )
}

export default Jumbotron;