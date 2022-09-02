import React, { createContext, useState, useContext } from 'react'

const SkillContext = createContext();

export const SkillContextProvider = ({ children }) => {
	const [activeSkill, setActiveSkill] = useState("Python")

	return (
		<SkillContext.Provider value={{ activeSkill, setActiveSkill }}>
			{children}
		</SkillContext.Provider>
	)
}
export function useAppContext() {
    return useContext(SkillContext);
  }

export default SkillContext;