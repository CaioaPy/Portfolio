import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import './Home.css';

function Home() {
    return (
        <div className="containerHome">
            <Navbar />
            <div className="introIntro">Helloooo!</div>
            <div className="introName1">My name is </div>
            <div className="introName2">Caio Abner</div>
            <div className="startContainerHome">
                <div className="imgIntro"><img src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg" alt="ee"></img></div>
                <div className="introTitle">
                    <div className="introSubtitle">
                        <div className="introSubtitle1">Full</div>
                        <div className="introSubtitle2">Stack</div>
                    </div>
                    <div className="introSubtitle3">Developer</div>
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