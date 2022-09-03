import PageNav from "./pageNav";
import { useState } from "react";

const NavBar = () =>{
	const [isHidden, setIsHidden] = useState("hidden")

	function checkHidden(){
		if(isHidden==="hidden"){
			setIsHidden("")
		}else(
			setIsHidden("hidden")
		)
	}


    return(
      <nav className="px-2 border-gray-200  navBar">
				<div className="container flex flex-wrap justify-between items-center mx-auto">

					<a href="/" className="flex items-center">
						<span className="self-center ml-5 text-2xl lg:text-4xl font-bold whitespace-nowrap navName">
							Guillaume de Surville
						</span>
					</a>

					<button data-collapse-toggle="mobile-menu" type="button" 
						onClick={()=>checkHidden()}
						className="inline-flex justify-center items-center ml-3 
						text-gray-400 rounded-lg md:hidden hover:text-gray-900 
						focus:outline-none focus:ring-2 focus:ring-blue-300" 
						aria-controls="mobile-menu-2" aria-expanded="true">
						<span className="sr-only">Open main menu</span>
						<svg className="w-6 h-6" aria-hidden="true" 
						fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
					</button>

					<div className={"w-full md:block md:w-auto px-5 " + isHidden}  id="mobile-menu">						
						<PageNav navBar={true} />
					</div>
				</div>
			</nav>
    )
}

export default NavBar;