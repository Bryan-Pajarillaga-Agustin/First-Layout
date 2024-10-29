export default function ProjectDisplay({changeImage, index, setIndex, img1, img2, img3, img4, img5, img6, img7, img8}){
   
    return (
        <>
            <div ref={img1} className="slideIn">
                <img src="./Images/Calculator.png" width={10} height={10} />
                <h1 className="ProjectTitle" >Calculator</h1>
            </div>
            <div ref={img2} className="container">
                <img src="./Images/Quiz.png" width={10} height={10} />
                <h1 className="ProjectTitle" >Quiz</h1>
            </div>
            <div ref={img3} className="container" style={{marginTop: 3.5 + "rem"}}>
                <img src="./Images/Memory.png" width={10} height={10} />
                <h1 className="ProjectTitle" >Memory Card</h1>
            </div>
            <div ref={img4} className="container">
                <img src="./Images/BinaryCalculator.png" width={10} height={10} />
                <h1 className="ProjectTitle" >Binary Calculator</h1>
            </div>
            <div ref={img5} className="container">
                <img src="./Images/Snake.jpg" width={10} height={10} />
                <h1 className="ProjectTitle" >Snake Game</h1>
            </div>
            <div ref={img6} className="container">
                <img src="./Images/Wordle.png" width={10} height={10} />
                <h1 className="ProjectTitle" >Wordle</h1>
            </div>
            <div ref={img7} className="container">
                <img src="./Images/Todo.png" width={10} height={10} />
                <h1 className="ProjectTitle" >To-Do List</h1>
            </div>
            <div ref={img8} className="container">
                <img src="./Images/Temperature.png" width={10} height={10} />
                <h1 className="ProjectTitle" >Temperature Converter</h1>
            </div>
        </>
    )
   
    
}