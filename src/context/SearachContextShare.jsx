import React, { createContext, useState } from 'react'

export const SearchContext = createContext("");


function SearachContextShare({children}) {
    const[searchKey,setSearchKey]=useState("")

  return (
    <SearchContext.Provider value={{ searchKey, setSearchKey }}>
        {
            children
        }
      
    </SearchContext.Provider>
  )
}

export default SearachContextShare
