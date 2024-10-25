import './App.css'
import Home from './App Components/Home/Home.jsx'
import NavBar from './App Components/NavigationBar/NavigationBar.jsx'
import Projects from './App Components/Projects/Projects.jsx'
import SideBar from './App Components/NavigationBar/SideBar.jsx'
import { useState } from 'react'
function App() {
  const [tab, setTab] = useState(0)
  const [shown, setShown] = useState(0)

  window.onscroll = () => {
    if(window.innerWidth <= 700){
      setShown(1)
      console.log(shown)
    } else {
      setShown(0)
    }
  }

  return (
    <div className="App">
      <SideBar shown={shown} tab={tab} setTab={(tab)=>setTab(tab)}></SideBar>
      <NavBar setTab={(tab)=>setTab(tab)} tab={tab}></NavBar>
      <Home></Home>
      <Projects></Projects>
    </div>
  )
}

export default App
