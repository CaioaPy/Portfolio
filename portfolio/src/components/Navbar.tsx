import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <Link to="/Projects">Projects</Link>
        <Link to="/">Home</Link>
        <Link to="/Experience">Experience</Link>
        </>
    )
}

export default Navbar;