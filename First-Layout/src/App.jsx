import './App.css'
import Home from './App Components/Home/Home.jsx'
import NavBar from './App Components/NavigationBar/NavigationBar.jsx'
import Projects from './App Components/Projects/Projects.jsx'
import SideBar from './App Components/NavigationBar/SideBar.jsx'
import Contacts from './App Components/Contacts/Contacs.jsx'
import LogIn from './App Components/Log-In/LogIn.jsx'
import About from './App Components/About/About.jsx'


import { useState } from 'react'
function App() {
  const [tab, setTab] = useState(0)
  const [Login, setLogin] = useState(false)
  const [Signin, setSignin] = useState(false)
  const [shown, setShown] = useState(false)

  const [ProjectsTab, setProjectsTab] = useState(null)
  const [HomeTab, setHomeTab] = useState(null)
  const [AboutTab, setAboutTab] = useState(null)
  const [ContactsTab, setContactsTab] = useState(null)
  
  return (
    <>
      <div className={Login ? "hideApp" : "App"}>
        <SideBar 
          shown={shown} tab={tab} setTab={(tab)=>setTab(tab)}
          setShown={(par)=>{setShown(par)}}
        />

        <NavBar 
          shown={shown} setShown={(par)=>setShown(par)}
          setTab={(tab)=>setTab(tab)} tab={tab}
          ProjectsTab={ProjectsTab}
          HomeTab={HomeTab}
          ContactsTab={ContactsTab}
          AboutTab={AboutTab}
          Login={Login}
          setLogin={par=>setLogin(par)}
          Signin={Signin}
          setSignin={par=>setSignin(par)}
        />

        <Home setHomeTab={par=>setHomeTab(par)}/> 

        <Projects setProjectsTab={par => setProjectsTab(par)} />

        <About setAboutTab={(par)=>setAboutTab(par)}/>

        <Contacts setContactsTab={par => setContactsTab(par)} />
      </div>
    
      <LogIn
       Login={Login}
       setSignin={par=>setSignin(par)}
       setLogin={par=>setLogin(par)}
      />
    </>
    
  )
}

export default App
