import '../NavigationBar/SideBar.css'

export default function SideBar({tab, shown, setTab, setShown}){
    
    return(
        <>
            <div className={shown == true ? "SideBar" : "hideSidebar"}>
                <ul className="sidebar-wrapper">
                    <button className="hideSideBar" onClick={()=>setShown(false)}>↵</button>
                    <h1>TABS</h1>
                    <li onClick={()=>{setTab(0)}}> <a href="#Home" className={tab === 0 ? "sideTabs active" : "sideTabs not-active"}>Home</a> </li>
                    <li onClick={()=>{setTab(1)}}> <a href="#Projects" className={tab === 1 ? "sideTabs active" : "sideTabs not-active"}>Projects</a> </li>
                    <li onClick={()=>{setTab(2)}}> <a href="#Contact" className={tab === 2 ? "sideTabs active" : "sideTabs not-active"}>About</a> </li>
                    <li onClick={()=>{setTab(3)}}> <a href="#About" className={tab === 3 ? "sideTabs active" : "sideTabs not-active"}>Contacts</a> </li>
                </ul>
            </div>
        </>
    )
}