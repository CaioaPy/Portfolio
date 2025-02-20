import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navbarH1">Caio Abner</h1>
            <div className="navContainer">
                <Link to="/Projects"><button>Projects</button></Link>
                <Link to="/"><button>Home</button></Link>
                <Link to="/Experience"><button>Experience</button></Link>
            </div>
        </div>
    )
}

export default Navbar;