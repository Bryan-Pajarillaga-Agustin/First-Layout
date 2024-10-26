import '../NavigationBar/SideBar.css'

export default function SideBar({tab, shown, setTab, setShown}){
    
    return(
        <>
            <div className={shown == true ? "SideBar" : "hide"}>
                <ul className="wrapper">
                    <button className="hideSideBar" onClick={()=>setShown(false)}>↵</button>
                    <h1>TABS</h1>
                    <li className={tab === 0 ? "sideTabs active" : "sideTabs not-active"} onClick={()=>{setTab(0)}}>Home</li>
                    <li className={tab === 1 ? "sideTabs active" : "sideTabs not-active"} onClick={()=>{setTab(1)}}>Projects</li>
                    <li className={tab === 2 ? "sideTabs active" : "sideTabs not-active"} onClick={()=>{setTab(2)}}>Contact</li>
                    <li className={tab === 3 ? "sideTabs active" : "sideTabs not-active"} onClick={()=>{setTab(3)}}>About</li>
                </ul>
            </div>
        </>
    )
}