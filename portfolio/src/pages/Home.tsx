import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import './Home.css';

function Home() {
    return (
        <div className="start-container">
            <Navbar />
            <h1>Home</h1>
        </div>
    );
}

export default Home;