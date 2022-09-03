import { useEffect, useState } from "react"
import axios from "axios"

import { backendUrl } from "../../pages/api/urls"

const Experience =()=>{
    const [experiences, setExperiences]= useState([])

    async function getExperiences(){
		try{
			const res = await axios.get(backendUrl+"/experiences/")
        	setExperiences(res.data)
			console.log(res)
		}catch{
			setExperiences([])
		}
        
    }


    useEffect(()=>{
        getExperiences()
    },[])

	const LinkButton = ({lien, query}) =>{
		if(lien===null){
			return(
				<div className="w-full flex justify-end p-2 md:py-0 md:px-24 mt-8">
				</div>
			)
		}else{
			return(
				<div className="w-full flex justify-end p-2 md:py-0 md:px-24 mt-8">
					<a href={lien+"?tags="+query.tags+"&languages="+query.languages+"&keywords="+query.keywords} 
						className="									
							inline-flex items-center 
							py-2 px-3 
							text-sm font-medium text-center text-white 
							bg-blue-700 rounded-lg 
							drop-shadow-md
							hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
						target={lien==="/projects"?"":"_blank"}
						rel="noreferrer">
						See more
						<svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" 
						xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
					</a>
				</div>
			)
		}

	}

    const ExperienceCard = ({experience}) =>{

			const date_deb = new Date(experience.date_deb)
			const date_fin = new Date(experience.date_fin)
			const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			date_deb = months[date_deb.getMonth()] + " " + date_deb.getFullYear()
			date_fin = months[date_fin.getMonth()] + " " + date_fin.getFullYear()
			console.log(experience.queryParams)
			return(
				<div className="
						mx-4 md:mx-12 lg:mx-24					
						md:grid md:grid-cols-4 xl:grid-cols-8						 
						drop-shadow
						experienceBorder
						py-4 2xl:py-20
						">

						<div className="
							w-full 
							md:col-span-1 
							md:bg-transparent
							">
							<p className="text-center font-bold text-lg w-full navName flex md:hidden justify-center pt-2">
								{experience.title}
							</p>
							<p className="text-sm text-gray-900 text-left w-full text-center md:pt-6 mb-4">
								<em>{date_deb} &rarr; {date_fin==="Jan 1970"?"Today":date_fin}</em>
							</p>								
						</div>

						<div className="
							w-full 
							md:col-span-3 xl:col-span-7 
							experienceCard rounded 
							md:py-6 md:drop-shadow-sm">
							<p className="text-center font-bold text-lg md:text-2xl navName hidden md:flex justify-center">
								{experience.title}
							</p>		
							<ul className="px-2 md:px-24 pt-1 md:pt-4 xl:pt-6 text-sm md:text-base">
									<li className="my-6">{experience.description1}</li>
									<li className="my-6">{experience.description2}</li>
									<li className="my-6">{experience.description3}</li>
							</ul>
							<LinkButton lien={experience.lien} query={experience.queryParams}/>
						</div>
						

				</div>
			)
    }

    return(
        <div>
            {experiences.map(experience=><ExperienceCard experience={experience} key={experience.title}/>)}
        </div>
    )
}
export default Experience