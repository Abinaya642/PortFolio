import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'


export default function ThemeProvider({children}) {
      const [Theme,setTheme]=useState('light')
      const HandleTheme=()=>{
        setTheme(Theme==='light'?'dark':'light')
      }
  return (
    <ThemeContext.Provider value={{Theme , HandleTheme}} >
        {children}
        </ThemeContext.Provider>
  )
}
