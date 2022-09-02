import { useState } from "react";
import { tagsList,languageList } from "../../../pages/api/getProjects";

/*3 types de filtres : 
	- langage
	- tags
	- keywords
	-> avec un display + une liste à chaque fois
*/ 
const ProjectFilter = ({languages,setLanguage,tags,setTags,setKeywords}) => {

	const [displayFilter, setDisplayFilter] = useState("hidden")

	function changeLanguageList(e){
			var index = languages.indexOf(e.target.value)
			if (index !== -1) {
					languages.splice(index, 1);
					setLanguage([...languages])
				}   
			else{
					setLanguage([...languages,e.target.value])
			}        
	}
	function changeTagList(e){
			var index = tags.indexOf(e.target.value)
			if (index !== -1) {
					tags.splice(index, 1);
					setTags([...tags])
				}   
			else{
					setTags([...tags,e.target.value])
			}        
	}

	function checkTag(tag){
		if(tags.includes(tag)){
			return (
				<div className={"bg-indigo-300 rounded pl-2 py-1 my-1"}>
					<button value={tag} className="text-blue-100 w-full text-left" 
						onClick={(e)=>changeTagList(e)}>
							{tag}
					</button>
				</div>
			)
		}else{
			return (
				<div className="hover:bg-indigo-200 rounded pl-2 py-1 m-1">
					<button value={tag} className="text-blue-900 w-full text-left" 
						onClick={(e)=>changeTagList(e)}>
							{tag}
					</button>
				</div>
			)
		}
	}

	function checkLanguage(language){
		if(languages.includes(language)){
			return (
				<div className={"bg-indigo-300 rounded pl-2 py-1 my-1"}>
					<button value={language} className="text-blue-100 w-full text-left" 
						onClick={(e)=>changeLanguageList(e)}>
						{language}
					</button>
				</div>
			)
		}else{
			return (
				<div className="hover:bg-indigo-200 rounded pl-2 py-1 my-1">
					<button value={language} className="text-blue-900 w-full text-left" 
						onClick={(e)=>changeLanguageList(e)}>
							{language}
					</button>
				</div>
			)
		}
	}

    return(
        <div className="w-full px-7 py-2 md:mt-8">

					<div className="
						w-full 
						grid md:grid-cols-3 md:gap-x-12
						bg-indigo-100 
						px-2 md:px-24 
						py-4
						justify-around
						rounded shadow"
						onMouseEnter={()=>setDisplayFilter("")} 
						onMouseLeave={()=>setDisplayFilter("hidden")}>

						<div className="col-span-1 flex-col w-full md:w-1/2 mx-auto my-2">

							<p className="text-blue-700 font-bold text-center lg:text-xl w-full"> 
								+ language
							</p>

							<div className={displayFilter+" ml-1 md:ml-5 w-full"}>
								{
									languageList.map(language=>(checkLanguage(language)))
								}								
							</div>

						</div>

						<div className="col-span-1 flex-col w-full md:w-1/2 mx-auto my-2">
								
							<p className="text-blue-700 font-bold lg:text-xl text-center w-full">
								+ tags
							</p>

							<div className={displayFilter+" ml-1 md:ml-5 w-full"}>
								{
									tagsList.map(tag=>(checkTag(tag)))
								}
							</div>
						</div>

						<div className="col-span-1 md:w-2/3 mx-auto my-2 ">
								<input className="
									col-span-1 w-full 
									px-2 py-1 
									rounded outline-offset-2 outline-blue-900" 
									placeholder="Search"
									onChange={(e)=>setKeywords(e.target.value)}></input>
						</div>

          </div>     
        </div>
    )
}

export default ProjectFilter;