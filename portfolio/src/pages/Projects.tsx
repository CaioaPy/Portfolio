import Navbar from "../components/Navbar";
import Background from '../components/Background';
import './Projects.css';
import github from '../assets/imgs/github.png';
import external from '../assets/imgs/externalLink.png';

function Projects() {
    return (
        <div className="start-container">
            <Navbar />
            <Background />
            <div className="pageContainer">
                <h1 className="title">My Projects</h1>
                <div className="projectsContainer">
                    <div className="projectCard">
                        <div className="projectTitle">Project 1</div>
                        <div className="projectDescription">DASDLKAJDS LASKJD ASLK FJADSLF JDSLFJFEALFD AJS DLKSAJD LSAKJ DSALKJDF ALKDJWA LKDJSA LKDJSA</div>
                        <div className="images">
                            <img src="" className="projectImage" alt="Project Thumbnail"></img>
                        </div>
                        <div className="projectTech">
                            <h1>Technologies Used:</h1> 
                            <p>HTML, CSS, JavaScript</p>
                        </div>
                        <div className="projectIcons">
                            <img src={github} className="projectIcon" alt="GitHub Icon"></img>
                            <img src={external} className="projectIcon" alt="External Link Icon"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;