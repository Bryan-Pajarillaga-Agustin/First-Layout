import '../Home/Home.css'

export default function Home({tab}){
    return (
        <div className="Home-wrapper">
            <div className="left">
                <div className="image-container">
                    <img src="../Images/HomePic.jpg" className="home-tab-picture back" width="10" height="10" />
                    <img src="../Images/HomePic2.jpn.jpg" className="home-tab-picture infront" width="10" height="10" />
                </div>
            </div>
            <div className="right">
                <h1>Hello World!</h1>
                <p>
                    Hi! My name is Bryan A. Pajarillaga and I made this simple portfolio website design 
                    to practice, enhance and flex my coding skills to show my experiences as a website 
                    developer.
                </p>
                <button className="buttons home-button">
                    Check My Info
                </button>
            </div>
        </div>
    )
}