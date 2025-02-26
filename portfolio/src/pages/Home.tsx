import Navbar from "../components/Navbar";
import './Home.css';

function Home() {
    return (
        <div className="containerHome">
            <Navbar />
            <div className="introIntro">Helloooo!</div>
            <div className="introName">My name is Caio Abner</div>
            <div className="introP">And I am a</div>
            <div className="startContainerHome">
                <div className="imgIntro"><img src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg" alt="ee"></img></div>
                <div className="introTitle">
                    <div className="introSubtitle">
                        <div className="introSubtitle1">Full</div>
                        <div className="introSubtitle2">Stack</div>
                    </div>
                    <div className="introSubtitle3">Developer</div>
                </div>
            </div>
        </div>
    );
}

export default Home;