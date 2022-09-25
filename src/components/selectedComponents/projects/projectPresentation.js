import React,{useState,useEffect} from "react";
import {filterProjects} from "../../../pages/api/getProjects";
import ProjectUniqueCard from "./projectUniqueCard";


export default function ProjectsPresentation({slug=null}){

    // use State for projects    
    const [languages, setLanguage] = useState([])
    const [tags, setTags] = useState([]) 
    const [keywords, setKeywords] = useState("") 
    const [projects,setProject] = useState([])

    async function retrieveProject(){
        const list = await filterProjects(tags,languages,keywords,slug)
        setProject(list)
    }
    useEffect(()=>{
        if(slug!=null){
            retrieveProject()
        }      
    },[slug])

    return(
        <div className=" mt-18">
            {projects.map(project=><ProjectUniqueCard project={project} key={project.title}/>)}
        </div>
    )
}