

export default function projectCard({project}){
    return(
      <div className="mx-4 my-6 md:m-0 md-w-full bg-white rounded-lg border border-gray-200 shadow-md">
				<a href="#">
					<img className="rounded-t-lg projectPicture" 
					src={project.picture?
						project.picture
						:
						"https://portfolioguillaume.blob.core.windows.net/media/photos/project/3552361426821896073"} 
					alt=""  />
				</a>

				<div className="px-5 py-1 h-64">
					<div className="my-2">
						<p className="mb-1 md:text-2xl align-middle font-bold tracking-tight text-gray-900 projectTitle">
							{project.title}
						</p>
					</div>


						<p className="mb-3 font-normal text-gray-700 text-justify projectDescription h-36">
								{project.content}
						</p>
						
						<a href={project.code} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Read more
							<svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
				</div>
			</div>
    )
}

