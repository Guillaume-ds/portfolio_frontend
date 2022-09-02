import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const PageNav = () => {

    const navNames = ["Presentation","Experience","Projects","Contact"]
    const [activeNavName,setActiveName] = useState("Presentation")
    const router = useRouter()

    async function checkPathName(){
        //check pathname in order to set active navName
        if(router.pathname === "/"){
            await setActiveName("Presentation")
        }
        else if(router.pathname === "/experience"){
            await setActiveName("Experience")    
        }
        else if(router.pathname === "/projects"){
            await setActiveName("Projects")
        }
        else if(router.pathname === "/contact"){
            await setActiveName("Contact")
        }
    }

    useEffect(()=>{
        checkPathName()
    },[])
    

    const checkActiveNavName = (navName) =>{   
        //check navName in order to set active navName  style   
        if(activeNavName === navName){
            return "activeNavName"
        }else{
            return "navName"
        }
    }

    function setUrl(navName){
        switch(navName){
            case "Presentation":
                return "/"
            case "Experience":
                return "/experience"
            case "Projects":
                return "/projects"
            case "Contact":
                return "/contact"
            default :
                return "/"
        }
    }

    return(
        <div className="w-full justify-around inline-flex " >
            {navNames.map(navName=>(
                <a  href={setUrl(navName)}
                    className={
                    "hover:underline mx-2 my-4 text-sm md:text-lg lg:text-2xl " 
                    + checkActiveNavName(navName)}
                    name={navName} >
                    {navName}
                </a>
            ))}
        </div>
    )
}

export default PageNav;