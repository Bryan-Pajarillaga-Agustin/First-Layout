import './App.css'
import Home from './App Components/Home/Home.jsx'
import NavBar from './App Components/NavigationBar/NavigationBar.jsx'
import Projects from './App Components/Projects/Projects.jsx'
import SideBar from './App Components/NavigationBar/SideBar.jsx'
import { useState } from 'react'
function App() {
  const [tab, setTab] = useState(0)
  const [shown, setShown] = useState(false)


  return (
    <div className="App">
      <SideBar shown={shown} tab={tab} setTab={(tab)=>setTab(tab)}></SideBar>
      <NavBar shown={shown} setShown={(par)=>{setShown(par)}} setTab={(tab)=>setTab(tab)} tab={tab}></NavBar>
      <Home></Home>
      <Projects></Projects>
    </div>
  )
}

export default App
