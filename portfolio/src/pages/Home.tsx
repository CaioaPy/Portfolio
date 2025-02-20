import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import './Home.css';

function Home() {
    return (
        <>
            <Navbar />
            <div className="start-container">
                <h1 className="introText">Helloo! I'm Caio and this is my portfolio!</h1>
            </div>
        </>
    );
}

export default Home;