import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import './Home.css';

function Home() {
    return (
        <div className="containerHome">
            <Navbar />
            <div className="startContainerHome">
                <div className="imgIntro"><img src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg" alt="ee"></img></div>
                <div className="introTitle">Caio Abner
                    <div className="introSubtitle">
                        <div className="introSubtitle1">Full</div>
                        <div className="introSubtitle2">Stack</div>
                    </div>
                    <div className="introSubtitle3">Developer</div>
                    <div className="introText">Hellooo! My name is Caio and this is my portfolio! </div>
                </div>
            </div>
        </div>
    );
}

export default Home;