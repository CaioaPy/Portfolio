import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import './Home.css';

function Home() {
    return (
        <>
            <Navbar />
            <div className="startContainerHome">
                <div className="imgIntro"><img src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg" alt="ee"></img></div>
                <h1 className="introText">Helloo! I'm Caio and this is my portfolio!</h1>
            </div>
        </>
    );
}

export default Home;