import React, {  createContext } from 'react'

export const agentContext = createContext()

const AgentContextProvider = ({children}) => {
    const data=[
        {
            id: 1,
            name: "Breach",
            // agent:Breach,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 2,
            name: "Raze",
            // agent:Raze,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 3,
            name: "Brimstone",
            // agent:Brimstone,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 4,
            name: "Viper",
            // agent:Viper,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 5,
            name: "Phoenix",
            // agent:Phoenix,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 6,
            name: "Fade",
            // agent:Fade,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 7,
            name: "Gekko",
            // agent:Gekko,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 8,
            name: "Jett",
            // agent:Jett,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 9,
            name: "Killjoy",
            // agent:Killjoy,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 10,
            name: "Sova",
            // agent:Sova,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 11,
            name: "Sage",
            // agent:Sage,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 12,
            name: "Omen",
            // agent:Omen,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 13,
            name: "Reyna",
            // agent:Reyna,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 14,
            name: "Astra",
            // agent:Astra,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 15,
            name: "Kay/o",
            // agent:Kay,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 16,
            name: "Skye",
            // agent:Skye,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 17,
            name: "Chamber",
            // agent:Chamber,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 18,
            name: "Neon",
            // agent:Neon,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 19,
            name: "Yoru",
            // agent:Yoru,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 20,
            name: "Harbor",
            // agent:Harbor,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
        {
            id: 21,
            name: "Deadlock",
            // agent:Deadlock,
            ability1:"",
            ability2:"",
            ability3:"",            
        },
    ]
  return (
    <agentContext.Provider value={{data}}>
        {children}
    </agentContext.Provider>
  )
}

export default AgentContextProvider