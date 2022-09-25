export default function projectUniqueCard({project}){
    return(
      <div className="md:m-0 md-w-full bg-white border border-gray-200 shadow-md mb-8">
                <img className="projectUniquePicture" 
                src={project.picture?
                    project.picture
                    :
                    "https://portfolioguillaume.blob.core.windows.net/media/photos/project/3552361426821896073"} 
                alt=""  />

				<div className="my-16">
						<p className="
                            my-8 text-2xl md:text-4xl 
                            align-middle font-bold 
                            tracking-tight text-indigo-900 
                            text-center">
							{project.title}
						</p>


						<p className="font-normal text-gray-700 projectDescription text-justify mx-auto px-4 md:w-1/2 ">
								{project.content}
						</p>
						

				</div>
                <div className="my-16 flex justify-center md:w-3/4 lg:w-1/2 mx-auto">
                    {
                        project.code_url?
                        <a href={project.code_url} 
                            className="inline-flex items-center 
                            py-2 px-3 text-sm font-medium mx-auto
                            text-center text-white bg-blue-700 
                            rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            See the code
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        :
                        null
                    }
                    {
                        project.project_url?
                        <a href={project.project_url} 
                            className="inline-flex items-center 
                            py-2 px-3 text-sm font-medium mx-auto
                            text-center text-white bg-blue-700 
                            rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            See the project
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        :
                        null
                    }

                </div>
			</div>
    )
}

