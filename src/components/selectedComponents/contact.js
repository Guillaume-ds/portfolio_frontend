import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../../pages/api/urls";
import PersonalCard from "../jumbotron/personalCard";

const Contact =()=>{
	const [content,setContent]=useState('')
	const [sender,setSender]=useState('')
	const [contactType,setContactType] = useState('Send a message')

	const contactTypeList = [
				"Send a message",
				"Contact informations"]

				console.log(sender)

	const ContactTypeButton = () =>{
			
			function styleButton(type){
					if(type===contactType){
							return " activeButton"
					}else{
							return " button"
					}
			}


			return(
					<div className="w-full flex justify-center py-8 ">
							{contactTypeList.map(type=>(                   
									<button
									className={"text-sm lg:text-base md:w-1/6 sm:mx-2 px-2 lg:py-2 rounded border hover:shadow " + styleButton(type)}
									name={type}
									key={type}
									onClick={(e)=>setContactType(e.target.name)}>
										{type}
									</button>
									
							))}

					</div>
			)
		}

	async function sendMail(){
			const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
			let body = {
					"content":content,
					"sender":sender
			}

			let res = await axios.post(backendUrl+"/contact/",body,config)
			if(res.status === 200){
				setSender("")
				setContent("")
			}
	}

	const DisplayContact = () => {
		if(contactType === "Send a message"){
			return(
				<div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto shadow border rounded">
				<p className="m-4 text-center font-bold text-gray-700 navName">
				Send me a message with your email address and I will reach at to you!
				</p>

				<form className="bg-white rounded px-2 md:px-8 pt-6 pb-8 ">

					<div className="mb-4">
							<label 
								className="block text-gray-700 text-sm mb-2 text-indigo-900" htmlFor="username">
								Your Email Address
							</label>
							<input 
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
								leading-tight focus:outline-none focus:shadow-outline" 
								onChange={e=>(setSender(e.target.value))}>
							</input>
					</div>
					
						
					<div className="mb-6">
						<label className="block text-gray-700 text-sm mb-2 text-indigo-900" htmlFor="password">
								Content
						</label>
						<input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3
							leading-tight focus:outline-none focus:shadow-outline" 
							onChange={e=>(setContent(e.target.value))}>
						</input >
					</div>


					<div className="flex items-center justify-between">
						<button className="button
								font-bold  px-4 rounded focus:outline-none focus:shadow-outline mx-auto" 
								type="button"
								onClick={()=>sendMail()}>
								Send message
						</button>
					</div>

				</form>
			</div>			
			)
		}else{
			return(
				<div className="shadow rounded w-fit mx-auto mx-2">
				<PersonalCard />
				</div>
			)
		}
	}


    return(
		<div className="h-screen grid content-center contactContainer">
			<div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto shadow border rounded">
				<p className="m-4 text-center font-bold text-gray-700 navName">
				Send me a message with your email address and I will reach at to you!
				</p>

				<form className="bg-white rounded px-2 md:px-8 pt-6 pb-8 ">

					<div className="mb-4">
							<label 
								className="block text-gray-700 text-sm mb-2 text-indigo-900" htmlFor="username">
								Your Email Address
							</label>
							<input 
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
								leading-tight focus:outline-none focus:shadow-outline" 
								onChange={e=>(setSender(e.target.value))}>
							</input>
					</div>
					
						
					<div className="mb-6">
						<label className="block text-gray-700 text-sm mb-2 text-indigo-900" htmlFor="password">
								Content
						</label>
						<textarea  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3
							leading-tight focus:outline-none focus:shadow-outline" rows="5"
							onChange={e=>(setContent(e.target.value))}>
						</textarea >
					</div>


					<div className="flex items-center justify-between">
						<button className="button
								font-bold  px-4 rounded focus:outline-none focus:shadow-outline mx-auto" 
								type="button"
								onClick={()=>sendMail()}>
								Send message
						</button>
					</div>

				</form>
			</div>			 
		</div>
    )
}
export default Contact;