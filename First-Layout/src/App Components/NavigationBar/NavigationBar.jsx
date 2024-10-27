import { useRef, useState } from "react"
import '../NavigationBar/NavigationBar.css'

export default function NavBar({setTab, tab, setShown}){
    const NavigationBar = useRef(null)

    window.onscroll = () => {
        NavigationBar.current.classList.toggle("stickyNav", window.scrollY > 50)
    }



    return (
        
        <>
            <div className="header" ref={NavigationBar}>
                <h1 className="title">Portfolio</h1>
                <ul className="tab-wrapper">
                    <li className="tabs" onClick={(tab)=>setTab(0)}> <a href="#Home" className={tab == 0 ? "active" : "not-active"}>Home</a> <span className={tab === 0 ? "markers-tab marked" : "markers-tab not-marked"}></span></li>
                    <li className="tabs" onClick={(tab)=>setTab(1)}> <a href="#Projects" className={tab == 1 ? "active" : "not-active"}>Projects</a> <span className={tab === 1 ? "markers-tab marked" : "markers-tab not-marked"}></span></li>
                    <li className="tabs" onClick={(tab)=>setTab(2)}> <a href="#Home" className={tab == 2 ? "active" : "not-active"}>Contact</a> <span className={tab === 2 ? "markers-tab marked" : "markers-tab not-marked"}></span></li>
                    <li className="tabs" onClick={(tab)=>setTab(3)}> <a href="#Home" className={tab == 3 ? "active" : "not-active"}>About</a> <span className={tab === 3 ? "markers-tab marked" : "markers-tab not-marked"}></span></li>
                </ul>
                <div className="LogIn-SignUp-wrapper">
                    <button className="buttons LogIn">
                        Log In
                    </button>
                    <button className="buttons SignUp">
                        Sign Up
                    </button>
                    <button className="more-tabs" onClick={()=>setShown(true)}><span id="animate"></span>≡</button>
                </div>
            </div>
        </>
    ) 
}