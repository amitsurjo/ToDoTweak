import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import image from "../assets/logo.jpg"

export const Header = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme"))||"dark")

  useEffect(()=>{
    localStorage.setItem("theme", JSON.stringify(theme))
    document.documentElement.removeAttribute("class") //remove previous class
    document.documentElement.classList.add(theme)
  }, [theme])
  return (
    <header>
        <div className="logo">
            <img src={ image } alt="Task logo" />
            <span>ToDoTweak</span>
        </div>
        <div className="themeSelector">
                <span onClick={()=>setTheme("light")} className={theme === "light"? "light activeTheme": "light"}></span>
                
                <span onClick={()=>setTheme("medium")} className={theme === "medium"? "medium activeTheme": "medium"}></span>
                
                <span onClick={()=>setTheme("dark")} className={theme === "dark"? "dark activeTheme": "dark"}></span>
                
                <span onClick={()=>setTheme("gOne")} className={theme === "gOne"? "gOne activeTheme": "gOne"}></span>
                
                <span onClick={()=>setTheme("gCreative")} className={theme === "gCreative"? "gCreative activeTheme": "gCreative"}></span>
                
                <span onClick={()=>setTheme("gradientTheme")} className={theme === "gradientTheme"? "gradientTheme activeTheme": "gradientTheme"}></span>
                <span onClick={()=>setTheme("gTwo")} className={theme === "gTwo"? "gTwo activeTheme": "gTwo"}></span>
                
                <span onClick={()=>setTheme("gThree")} className={theme === "gThree"? "gThree activeTheme": "gThree"}></span>
                
          </div>
        
    </header>
  )
}
 
