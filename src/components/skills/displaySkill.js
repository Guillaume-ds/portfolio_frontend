import Image from "next/image"

import { useAppContext} from "../../context/skillContext"

import Python_logo from "../../assets/images/Python_logo.png";
import JS_logo from "../../assets/images/JS_logo.png";
import Data_logo from "../../assets/images/Data_logo.png";
import Web_logo from "../../assets/images/Web_logo.png"

const DisplaySkill = () => {
    const {activeSkill,setActiveSkill} = useAppContext()


    const skillsList = [
					"Python",
					"Javascript",
					"Data Science",
					"Web Development"]

    const SkillsButton = () =>{
        
        function styleButton(skill){
            if(skill===activeSkill){
                return " activeButton"
            }else{
                return " button"
            }
        }


        return(
            <div className="w-full flex justify-center my-2 ">

                {skillsList.map(skill=>(
                    
                    <button
                    className={"text-sm lg:text-base md:w-1/5 sm:mx-2 px-2 lg:py-2 rounded border hover:shadow " + styleButton(skill)}
                    name={skill}
                    onClick={(e)=>setActiveSkill(e.target.name)}>
                        {skill}
                    </button>
                    
                ))}

            </div>
        )
    }

    const SkillPresentation=()=>{
			switch(activeSkill){
				case "Python":
					return(
						<>
							<div className="flex justify-center my-16 lg:my-24">
								<Image src={Python_logo} height={90} width={90}/>
							</div>

							<div className="md:grid md:grid-cols-3 gap-x-4 my-16 lg:my-24">
								<p className="
									md:col-span-1 
									navName text-2xl font-bold
									p-2 text-center "
									>
									Web development
								</p>

								<ul className="
									mt-2
									md:col-span-2 
									px-4 md:pl-12 xl:pl-24 
									text-xl text-justify">
									<li className="mb-8">
										Working knowledge of <strong>Django and Streamlit</strong>
									</li>
									<li className="mb-8">
										Development of 3 full stack applications using <strong>Django and Postgresql</strong> for the backend
										with a fully working authentication system
									</li>
									<li className="mb-8">
										Creation of <strong>several REST API </strong>
									</li>
									<li className="mb-8">
										Development of a <strong>monitoring dashboard</strong> incoporating 
										a predictive algorithm using <strong>streamlit</strong> for a CAC-40 company
									</li>
								</ul>

							</div>

							<div className="md:grid md:grid-cols-3 gap-x-4 my-16 lg:my-24">
								<p className="
									md:col-span-1 
									navName text-2xl font-bold
									p-2 text-center ">
									Data Science
								</p>

								<ul className="
									mt-2
									md:col-span-2 
									px-4 md:pl-12 xl:pl-24 
									text-xl text-justify">
									<li className="mb-8">
										Experience of the mains librairies such as numpy and pandas
									</li>
									<li className="mb-8">
										Development of several <strong>Web scrapping applications</strong> including 
										a <a href="">dashboard</a> showing many KPIs about the activity of the candidates to 
										the 2022 french presidential election on twitter
									</li>
									<li className="mb-8">
										Creation of predictive algorithm using <strong>scikit-learn</strong>
									</li>
									<li className="mb-8">
										Redaction of many articles on Data Science
									</li>
								</ul>

							</div>

							<div className="md:grid md:grid-cols-3 gap-x-4 my-16 lg:my-24">
								<p className="
									md:col-span-1 
									navName text-2xl font-bold
									p-2 text-center ">
									Certifications
								</p>

								<ul className="
									mt-2
									md:col-span-2 
									px-4 md:pl-12 xl:pl-24 
									text-xl text-justify">
									<li className="mb-8">
										Django Mooc by the University of Michigan
									</li>
									<li className="mb-8">
										Web scrapping with python by datacamp
									</li>
								</ul>

							</div>
					</>
						)

				case "Javascript":
					return(
						<>
							<div className="flex justify-center my-16 lg:my-24">
								<Image src={JS_logo} height={90} width={90}/>
							</div>

							<div className="md:grid md:grid-cols-3 gap-x-4 my-16 lg:my-24">
								<p className="
									md:col-span-1 
									navName text-2xl font-bold
									p-2 text-center ">
									Web development
								</p>

								<ul className="
									mt-2
									md:col-span-2 
									px-4 md:pl-12 xl:pl-24 
									text-xl text-justify">
									<li className="mb-8">
										Working knowledge of <strong>React and Next.js</strong>
									</li>
									<li className="mb-8">
										Development of several full stack applications using <strong>Next.js or React</strong> 
									</li>
									<li className="mb-8">
										Experience of <strong>WEB3.js and Hardhat</strong> for <strong>Blockchain development</strong>
									</li>
								</ul>

							</div>

							<div className="md:grid md:grid-cols-3 gap-x-4 my-16 lg:my-24">
								<p className="
									md:col-span-1 
									navName text-2xl font-bold
									p-2 text-center ">
									Data Science
								</p>

								<ul className="
									mt-2
									md:col-span-2 
									px-4 md:pl-12 xl:pl-24 
									text-xl text-justify">
									<li className="mb-8">
										Usage of Javascript in Data Science projects
									</li>
								</ul>

							</div>

							<div className="md:grid md:grid-cols-3 gap-x-4 my-16 lg:my-24">
								<p className="
									md:col-span-1 
									navName text-2xl font-bold
									p-2 text-center ">
									Certifications
								</p>

								<ul className="
									mt-2
									md:col-span-2 
									px-4 md:pl-12 xl:pl-24 
									text-xl text-justify">
									<li className="mb-8">
										Interactivity with Javascript by the University of Michigan
									</li>
									<li className="mb-8">
										Front end web development with react by the Honk Kong university of Science and Technology
									</li>
								</ul>

							</div>
					</>
						)
				case "Data Science":
						return(
							<>
							<div className="flex justify-center my-16 lg:my-24">
								<Image src={Data_logo} height={90} width={140}/>
							</div>

							<div className="md:grid md:grid-cols-3 gap-x-4 my-16 lg:my-24">
								<p className="
									md:col-span-1 
									navName text-2xl font-bold
									p-2 text-center ">
									Data Collection
								</p>

								<ul className="
									mt-2
									md:col-span-2 
									px-4 md:pl-12 xl:pl-24 
									text-xl text-justify">
									<li className="mb-8">
										Experience of <strong>Web Scrapping</strong> with various tools and packages
									</li>
									<li className="mb-8">
										Development of several pipelines between <strong>SQL Databases</strong> and backends or algorithms
									</li>
									<li className="mb-8">
										Working experience of <strong>AWS and Azure</strong> storage solutions
									</li>
								</ul>

							</div>

							<div className="md:grid md:grid-cols-3 gap-x-4 my-16 lg:my-24">
								<p className="
									md:col-span-1 
									navName text-2xl font-bold
									p-2 text-center ">
									Data Analysis
								</p>

								<ul className="
									mt-2
									md:col-span-2 
									px-4 md:pl-12 xl:pl-24 
									text-xl text-justify">
									<li className="mb-8">
										Working experience of <strong>data cleaning and data analysis</strong> using
										a variety of tools, such as: <em>pandas, numpy, matplotlib, seaborn...</em> 
									</li>
									<li className="mb-8">
										Creation of several <strong>interactive dashboards</strong>
									</li>
								</ul>

							</div>

							<div className="md:grid md:grid-cols-3 gap-x-4 my-16 lg:my-24">
								<p className="
									md:col-span-1 
									navName text-2xl font-bold
									p-2 text-center ">
									Artificial Intelligence
								</p>

								<ul className="
									mt-2
									md:col-span-2 
									px-4 md:pl-12 xl:pl-24 
									text-xl text-justify">
									<li className="mb-8">
										Experience of <strong>Scikit-learn</strong>
									</li>
									<li className="mb-8">
										Development of a <strong>Predictive algorithm</strong>
									</li>
								</ul>

							</div>

					</>
						)
				case "Web Development":
						return(
							<>
							<div className="flex justify-center my-16 lg:my-24">
								<Image src={Web_logo} height={90} width={90}/>
							</div>

							<div className="md:grid md:grid-cols-3 gap-x-4 my-16 lg:my-24">
								<p className="
									md:col-span-1 
									navName text-2xl font-bold
									p-2 text-center ">
									Front End
								</p>

								<ul className="
									mt-2
									md:col-span-2 
									px-4 md:pl-12 xl:pl-24 
									text-xl text-justify">
									<li className="mb-8">
										Working knowledge of <strong>React and Next.js</strong>
									</li>
									<li className="mb-8">
										Development of several full stack applications using <strong>Next.js or React</strong> 
									</li>
									<li className="mb-8">
										Experience of <strong>WEB3.js and Hardhat</strong> for <strong>Blockchain development</strong>
									</li>
								</ul>

							</div>

							<div className="md:grid md:grid-cols-3 gap-x-4 my-16 lg:my-24">
								<p className="
									md:col-span-1 
									navName text-2xl font-bold
									p-2 text-center ">
									Back End
								</p>

								<ul className="
									mt-2
									md:col-span-2 
									px-4 md:pl-12 xl:pl-24 
									text-xl text-justify">
									<li className="mb-8">
										Development of several full stack web sites with <strong>Django and Postgresql</strong>
									</li>
									<li className="mb-8">
										Deployement of those web sites on <strong>Heroku, Azure or AWS</strong>
									</li>
									<li className="mb-8">
										Experience with storage solutions such as <strong>Azure Blob or AWS S3</strong>
									</li>
								</ul>

							</div>

				

							<div className="md:grid md:grid-cols-3 gap-x-4 my-16 lg:my-24">
								<p className="
									md:col-span-1 
									navName text-2xl font-bold
									p-2 text-center ">
									Certifications
								</p>

								<ul className="
									mt-2
									md:col-span-2 
									px-4 md:pl-12 xl:pl-24 
									text-xl text-justify">
									<li className="mb-8">
										Interactivity with Javascript by the University of Michigan
									</li>
									<li className="mb-8">
										Front end web development with react by the Honk Kong university of Science and Technology
									</li>
									<li className="mb-8">
										Django Mooc by the University of Michigan
									</li>
								</ul>

							</div>
					</>
						)
				default :
						return(
								<p>Please select an option</p>
						)
        }
    }
    
    return(
        <div onScroll={(e)=>onScroll(e)}>
            <SkillsButton />
            <SkillPresentation />
        </div>
    )
    

}

export default DisplaySkill;