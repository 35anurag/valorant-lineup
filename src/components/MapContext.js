import React, { createContext } from 'react'

import Haven from "../assets/haven.webp"
import Split from "../assets/split.webp"
import Fracture from "../assets/fracture.webp"
import Ascent from "../assets/ascent.webp"
import Breeze from "../assets/breeze.webp"
import Lotus from "../assets/lotus.webp"
import Bind from "../assets/bind.webp"
import Icebox from "../assets/icebox.webp"
import Pearl from "../assets/pearl.webp"
import Sunset from "../assets/sunset.webp"

export const mapContext = createContext()

const MapContextProvider = ({children}) => {
    const data=[
        {
            id: 1,
            name: "Haven",
            map:Haven,
            mapImg: "",            
        },
        {
            id: 2,
            name: "Split",
            map:Split,
            mapImg: "",            
        },
        {
            id: 3,
            name: "Fracture",
            map:Fracture,
            mapImg: "",            
        },
        {
            id: 4,
            name: "Ascent",
            map:Ascent,
            mapImg: "",            
        },
        {
            id: 5,
            name: "Breeze",
            map:Breeze,
            mapImg: "",            
        },
        {
            id: 6,
            name: "Lotus",
            map:Lotus,
            mapImg: "",            
        },
        {
            id: 7,
            name: "Bind",
            map:Bind,
            mapImg: "",            
        },
        {
            id: 8,
            name: "Icebox",
            map:Icebox,
            mapImg: "",            
        },
        {
            id: 9,
            name: "Pearl",
            map:Pearl,
            mapImg: "",            
        },
        {
            id: 10,
            name: "Sunset",
            map:Sunset,
            mapImg: "",            
        },
    ]
  return (
    <mapContext.Provider value={{data}}>
    {children}
    
    </mapContext.Provider>
  )
}

export default MapContextProvider