import React,{useState,useEffect} from "react";
import { useRouter } from "next/router";
import {filterProjects} from "../../../pages/api/getProjects";
import ProjectFilter from "./projectsFilter";
import ProjectCard from "./projectCard";


export default function ProjectsList(){
    // get params from URL, if any
    const router = useRouter()
    const params = router.query
    console.log(params)
    // check params and use State
    const [languages, setLanguage] = useState([])
    const [tags, setTags] = useState([]) 
    const [keywords, setKeywords] = useState("") 

    async function checkParams(){
        if(params!={}){
            if(params.keywords!=""){
                try{
                    await setKeywords(params.keywords)
                }catch{
                    null
                }                
            }
            if(params.tags!=[""]){
                try{
                    await setTags(params.tags.split(','))
                }catch{
                    null
                }                 
            }
            if(params.languages != [""]){
                try{
                    await setLanguage(params.languages.split(','))
                }catch{
                    null
                }                
            }
        }
    }
    useEffect(()=>{
        checkParams()
    },[params])

    console.log(languages,tags,keywords)

    // use State for projects
    const [projects,setProject] = useState([])

    async function retrieveProject(){
        const list = await filterProjects(tags, languages,keywords)
        setProject(list)
    }
    useEffect(()=>{
        retrieveProject()      
    },[languages,tags,keywords])

    return(
        <div className=" mt-16 md:mt-36">
        <ProjectFilter            
            languages={languages} setLanguage={setLanguage} 
            tags={tags} setTags={setTags}
            keywords={keywords} setKeywords={setKeywords}/>
        <div className="
            md:grid 
            content-around
            md:px-12 xl:px-24
            md:grid-cols-2 2xl:grid-cols-3
            md:gap-x-10 xl:gap-x-20 
            mt-12 md:mt-24
            gap-y-12 lg:gap-y-24"
            >            
            {projects.map(project=><ProjectCard project={project} />)}
        </div>
        </div>
    )
}