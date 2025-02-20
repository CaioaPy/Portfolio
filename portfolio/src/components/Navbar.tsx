import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/Projects"><button>Projects</button></Link>
                <Link to="/"><button>Home</button></Link>
                <Link to="/Experience"><button>Experience</button></Link>
            </div>
        </div>
    )
}

export default Navbar;