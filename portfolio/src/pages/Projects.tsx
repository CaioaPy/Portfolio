import Navbar from "../components/Navbar";
import Background from '../components/Background';
import './Projects.css';

function Projects() {
    return (
        <div className="start-container">
            <Navbar />
            <Background />
            <div className="projectsContainer">
                <h1>My Projects</h1>
                <div className="projectCard">
                    <div className="projectTitle">Project 1</div>
                    <div className="projectDescription">Description 1</div>
                </div>
            </div>
        </div>
    );
}


export default Projects;