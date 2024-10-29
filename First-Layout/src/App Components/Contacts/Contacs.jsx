import { useEffect, useRef } from "react"
import "../Contacts/Contacts.css"
export default function Contacts({setContactsTab}){
    const ContactsTab = useRef(null)
    
    useEffect(()=>{
        setContactsTab(ContactsTab.current)
    },[])

    return(
        <div className="Contacts" ref={ContactsTab} id="Contact">

        </div>
    )
}