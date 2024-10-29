import { useEffect, useRef } from 'react'
import '../About/About.css'

export default function About({ setAboutTab }){
    const AboutTab = useRef(null)

    useEffect(()=>{
        setAboutTab(AboutTab.current)
    },[])


    return (
        <>
            <div className="AboutTabWrapper" ref={AboutTab} id='About'>

            </div>
        </>
    )
}