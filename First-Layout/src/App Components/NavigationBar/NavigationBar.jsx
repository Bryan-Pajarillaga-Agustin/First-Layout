import { useState } from "react"
import '../NavigationBar/NavigationBar.css'

export default function NavBar({setTab, tab}){

    return (
        
        <>
            <div className="header">
                <h1 className="title">PORTFOLIO</h1>
                <ul className="tab-wrapper">
                    <li className={tab == 0 ? "tabs active" : "tabs not-active"} onClick={(tab)=>setTab(0)}>Home <span className={tab === 0 ? "markers-tab marked" : "markers-tab not-marked"}></span></li>
                    <li className={tab == 1 ? "tabs active" : "tabs not-active"} onClick={(tab)=>setTab(1)}>Projects <span className={tab === 1 ? "markers-tab marked" : "markers-tab not-marked"}></span></li>
                    <li className={tab == 2 ? "tabs active" : "tabs not-active"} onClick={(tab)=>setTab(2)}>Contact <span className={tab === 2 ? "markers-tab marked" : "markers-tab not-marked"}></span></li>
                    <li className={tab == 3 ? "tabs active" : "tabs not-active"} onClick={(tab)=>setTab(3)}>About <span className={tab === 3 ? "markers-tab marked" : "markers-tab not-marked"}></span></li>
                </ul>
                <div className="LogIn-SignUp-wrapper">
                    <button className="buttons LogIn">
                        Log In
                    </button>
                    <button className="buttons SignUp">
                        Sign Up
                    </button>
                    <button className="more-tabs"><span id="animate"></span>≡</button>
                </div>
            </div>
        </>
    ) 
}