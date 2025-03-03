import React, { createContext, useContext, useState } from 'react'

const ToolDataContext = createContext()

export const useToolData = () => useContext(ToolDataContext)

export const ToolDataProvider = ({ children }) => {
  const [toolData, setToolData] = useState({
    foda: { strengths: '', opportunities: '', weaknesses: '', threats: '' },
    sixHats: { white: '', red: '', black: '', yellow: '', green: '', blue: '' },
    catwda: { customers: '', actors: '', transformation: '', worldview: '', owner: '', environment: '' }
  })

  const updateToolData = (tool, data) => {
    setToolData((prev) => ({ ...prev, [tool]: data }))
  }

  return (
    <ToolDataContext.Provider value={{ toolData, updateToolData }}>
      {children}
    </ToolDataContext.Provider>
  )
}
