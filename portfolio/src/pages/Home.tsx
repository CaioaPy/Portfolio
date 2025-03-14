import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import './Home.css';
import introImage from '../assets/imgs/introImage.jpeg';
import Background from '../components/Background';

function Home() {
    return (
        <div className="containerHome">
            <Background />
            <Navbar />
            <div className="introIntro">Helloooo!</div>
            <div className="introName1">My name is </div>
            <div className="introName2">Caio Abner</div>
            <div className="startContainerHome">
                <div className="imgIntro"><img src={introImage} alt="IntroImage"></img></div>
                <div className="introTitle">
                    <div className="introSubtitle">
                        <div className="introSubtitle1">Full Stack</div>
                    </div>
                    <div className="introSubtitle2">Developer</div>
                    <div className="buttonsContainer">
                        <div className="buttonsRow">
                            <Link to="/about" className="linkButton"><button className="aboutButton">Who Am I?</button></Link>
                            <Link to="/projects" className="linkButton"><button className="projectsButton">My Projects</button></Link>
                        </div>
                        <Link to="/contact" className="linkButton"><button className="getInTouchButton">Get In Touch</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;