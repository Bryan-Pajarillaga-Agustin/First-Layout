import { useEffect, useRef, useState } from "react"
import '../NavigationBar/NavigationBar.css'

export default function NavBar({setTab, tab, setShown, ProjectsTab, HomeTab, ContactsTab, AboutTab, setSignin, setLogin, Login, Signin}){
    const NavigationBar = useRef(null)
    const [scrolly, setScrollY] = useState(window.scrollY)
    window.onscroll = ()=>{
        setScrollY(window.scrollY)
        console.log(HomeTab.offsetTop)
        if(scrolly < HomeTab.offsetTop + 300){
            setTab(0)
            ProjectsTab.classList.remove("animateProj")
        }
        else if(scrolly < ProjectsTab.offsetTop + 700){
            setTab(1)
            console.log(AboutTab)
            ProjectsTab.classList.add("animateProj")
            // AboutTab.classList.remove("animateAbout")
        } else if(scrolly < AboutTab.offsetTop + 500){
            setTab(2)
            // ContactsTab.classList.remove("animateAbout")
        } else if(scrolly < ContactsTab.offsetTop + 300){
            setTab(3)
        }
    }


    return (
        
        <>
            <div className="header" ref={NavigationBar}>
                <button className="more-tabs" onClick={()=>setShown(true)}><span id="animate"></span>≡</button>
                <h1 className="title">Portfolio</h1>
                <ul className="tab-wrapper">
                    <li className="tabs" onClick={()=>setTab(0)}> <a href="#Home" className={tab == 0 ? "active" : "not-active"}>Home</a> <span className={tab === 0 ? "markers-tab marked" : "markers-tab not-marked"}></span></li>
                    <li className="tabs" onClick={()=>setTab(1)}> <a href="#Projects" className={tab == 1 ? "active" : "not-active"}>Projects</a> <span className={tab === 1 ? "markers-tab marked" : "markers-tab not-marked"}></span></li>
                    <li className="tabs" onClick={()=>setTab(2)}> <a href="#Contact" className={tab == 2 ? "active" : "not-active"}>About</a> <span className={tab === 2 ? "markers-tab marked" : "markers-tab not-marked"}></span></li>
                    <li className="tabs" onClick={()=>setTab(3)}> <a href="#Home" className={tab == 3 ? "active" : "not-active"}>Contacts</a> <span className={tab === 3 ? "markers-tab marked" : "markers-tab not-marked"}></span></li>
                </ul>
                <div className="LogIn-SignUp-wrapper">
                    <button className="buttons LogIn" onClick={()=>{setLogin(true), console.log("hello")}}>
                        Log In
                    </button>
                    <button className="buttons SignUp">
                        Sign Up
                    </button>
                </div>
            </div>
        </>
    ) 
}