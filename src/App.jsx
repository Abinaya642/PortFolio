// import reactLogo from './assets/react.svg'
// import './App.css'

import { Navbar } from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import './index.css'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { Skills } from './pages/Skills'
import { Contact } from './pages/Contact'
import { Experience } from './pages/Experience'
import { Projects } from './pages/Projects'
import { Resume } from './pages/Resume'

function App() {
  const {Theme}=useContext(ThemeContext)

  return  (
    <div  className={ Theme==="light"? 'bg-white h-full w-full overflow-hidden text-lg text-purple-950' : 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 h-full w-full overflow-hidden text-lg text-white' } > 
      {/* className='bg-[#171d32] h-auto w-full overflow-hidden' */}
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  )
}

export default App
