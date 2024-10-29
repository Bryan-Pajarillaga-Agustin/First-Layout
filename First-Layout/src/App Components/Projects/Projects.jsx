import { useEffect, useRef, useState } from 'react'
import '../Projects/TopLeft.css'
import '../Projects/TopRight.css'
import '../Projects/Bottom.css'
import ProjectDisplay from './ProjectDisplay'

export default function Projects({tab, setProjectsTab}) {
    const ProjectsTab = useRef()
    useEffect(()=>{
        setProjectsTab(ProjectsTab.current)
    },[])

    const [index, setIndex] = useState(0)
    const img1 = useRef(null)
    const img2 = useRef(null)
    const img3 = useRef(null)
    const img4 = useRef(null)
    const img5 = useRef(null)
    const img6 = useRef(null)
    const img7 = useRef(null)
    const img8 = useRef(null)
    const listOfImg = [
        img1, img2, img3, img4, img5, img6, img7, img8
    ]

    function changeImage(par){ 
        if(par == 'slideIn' && index < 7){ 
            setIndex(prev => prev + 1)
            // Change the image to next in animate
            if(listOfImg[index+1] != null){
                listOfImg[index+1].current.classList.replace("container", par)
                listOfImg[index].current.classList.replace(par, "container")

                listOfImg[index].current.classList.replace("slideBack", "container")
                listOfImg[index].current.classList.replace("slideIn", par)
            }
            
            // Change the prev Image into container
        }
        else if(par == 'slideBack' && index > 0){
            setIndex(prev => prev - 1)

            if(listOfImg[index-1] != null){
                // Change the image to prev in animate
                listOfImg[index-1].current.classList.replace("container", par)
                // Change the prev Image into container
                listOfImg[index].current.classList.replace(par, "container")
                listOfImg[index].current.classList.replace("slideIn", "container")
            }
            
        }
    }

    return (
        <div className={tab === 1 ? "Projects slideAnimation" : "Projects"} ref={ProjectsTab} id='Projects'>
            <div className="top">
                <div className="left">
                    <h1>Side Projects:</h1>
                    <div className="project-wrapper">
                        <button className='leftSlide' onClick={()=>changeImage('slideBack')}> &#8592; </button>
                        <ProjectDisplay
                            img1={img1}
                            img2={img2}
                            img3={img3}
                            img4={img4}
                            img5={img5}
                            img6={img6}
                            img7={img7}
                            img8={img8}
                        ></ProjectDisplay>
                        <button className='rightSlide' onClick={()=>changeImage("slideIn")}>  &#8594; </button>
                    </div>
                </div>
                <div className="right">
                    <h1>Thoughts: </h1>

                    <p>During my Junior High School life, I tried to self-study the javascript as my main programming languge in software development. These are the few simple projects and practices I made while I was constantly learning Javascript.</p>
                    
                    <p>This website portfolio is also one of the projects that I made by using a framework called ReactJS. ReactJS is made by Facebook and React is the most famous framework that developers used. React isn't hard nor easy to use, it takes time to master the framework and constantly learning from mistakes. </p>
                    
                </div>
            </div>
            <div className="bottom">
                <h1>Languages: </h1>
                <div className="LanguageWrapper">

                   <div className="row">
                        <div className="Languages">
                            <img src="./Images/JS.png" className="EachPic" />
                            <h1 className="LangName">JavaScript</h1>
                        </div>
                        <div className="Languages">
                            <img src="./Images/C++.png" className="EachPic" />
                            <h1 className="LangName">C++</h1>
                        </div>
                   </div>

                   <div className="row">
                        <div className="Languages">
                            <img src="./Images/C.png" className="EachPic" />
                            <h1 className="LangName">C Programming</h1>
                        </div>
                        <div className="Languages">
                            <img src="./Images/Java.png" className="EachPic" />
                            <h1 className="LangName">Java</h1>
                        </div>
                   </div>
                    
                </div>
            </div>
        </div>
    )
}