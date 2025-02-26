import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navbarH1">Caio Abner</h1>
            <div className="navContainer">
                <Link to="/"><button>Home</button></Link>
                <Link to="/About"><button>About</button></Link>
                <Link to="/Projects"><button>Projects</button></Link>
                <Link to="/Contact"><button>Contact</button></Link>
            </div>
        </div>
    )
}

export default Navbar;