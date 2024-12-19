import React, { createContext, useEffect, useState } from 'react'

export const roleContext = createContext({})
export const producteditresponsecontext = createContext({})
export const cartremoveresponse = createContext({})
export const favremovecontext = createContext({})


function Contextshare({children}) {
    
  const[role,setrole] = useState("")
  const[editresponse,seteditresponse] = useState([])
  const [remoitemresponse,setremoitemresponse] = useState([])
  const [favremoveres,setfavremoveres] = useState([])

  useEffect(()=>{
    if(sessionStorage.getItem("existinguser")){
      setrole(JSON.parse(sessionStorage.getItem("existinguser")).role)
    }
    
  },[])
  return (
    <>
<favremovecontext.Provider value={{favremoveres,setfavremoveres}}>
  
  <cartremoveresponse.Provider value={{remoitemresponse,setremoitemresponse}}>
    <roleContext.Provider value={{role,setrole}}>
     <producteditresponsecontext.Provider value={{editresponse,seteditresponse}}> {children}</producteditresponsecontext.Provider>
      </roleContext.Provider>
  </cartremoveresponse.Provider>
</favremovecontext.Provider>
    
    </>
  )
}

export default Contextshare

