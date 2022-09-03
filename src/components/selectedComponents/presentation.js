import { useState, useEffect } from "react";

import Jumbotron from '../jumbotron/jumbotron'
import DisplaySkill from "../skills/displaySkill";

const Presentation =()=>{

    const [counter, setCounter] = useState(0);
    const list = ["a Web Developper",
                "a Data Scientist",
                "a MSc student",
                "looking for an internship"]
        

    function changeCounter(counter){
        if(counter<3){
            setCounter(counter+1)
        }else{
            setCounter(0)
        }
    }

    useEffect(() => {
        const timer = counter >= 0 && setInterval(() => changeCounter(counter), 2700);
        return () => clearInterval(timer);
      }, [counter]);


    const SwitchingText = () => {
        return(
            <p className="switchText text-2xl md:text-3xl lg:text-4xl navName">
                {list[counter]}
            </p>
        )
    }

    
    return( 
        <div>
            <Jumbotron  />
            
            <div className="w-full px-2 md:px-24 lg:grid lg:grid-cols-5 lg:gap-x-24 mb-12 md:my-36 lg:my-48">
                <div className="
                    lg:col-span-2 
                    text-center grid content-center 
                    my-16 lg:my-0 md:h-full">
                    <p className="text-gray-900 font-bold mb-4 lg:mb-8 text-xl md:text-2xl lg:text-3xl">
                        I am
                    </p>
                    <SwitchingText />
                </div>

                <div className="lg:col-span-3 text-justify text-lg md:text-2xl grid content-center">
                    <p className="pb-6">
                        I am a 22 years old student currently enrolded in the
                        <strong> MSc Data Science for Business at HEC Paris and Polytechnique</strong>
                        . 
                    </p>
                    <p className="pb-6">
                        I am looking for an internship in data science starting in March 2023, preferably related to artificial intelligence.
                    </p>                
                    <p className="pb-6">
                        I have working knowledge in <strong>Python</strong> for both <strong>web development and data analysis</strong>. 
                        I am currently learning ML/DL in python. 
                        I also have experience with <strong>Javascript</strong> for web development, and other data analysis tools such as PowerBI and Tableau. 
                    </p>
                    <p >
                        I am passionate about <strong>music and sailing</strong> and I have praticed both activites for more than 10 years now. 
                    </p>
                    <p className="text-center mt-8">
                        <a href="https://drive.google.com/file/d/18LjD661RWdJptFwEpObHVvyFhMUqP3NH/view?usp=sharing" target="_blank" rel="noreferrer"> 
                            My resumé
                        </a> 
                    </p>
                </div>
                
            </div>
            
            <div className="xl:w-3/4 m-auto px-2 md:px-24 my-24 md:my-36 lg:my-56">
                <p className="text-3xl font-bold navName text-center w-full my-8">Technical skills: </p>
                <hr className="border border-blue-700 bg-blue-700 my-4"></hr>
            
                <DisplaySkill />

                
                
            </div>
        </div>
    )
}
export default Presentation