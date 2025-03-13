import Navbar from "../components/Navbar";
import Background from '../components/Background';
import './Projects.css';
import github from '../assets/imgs/github.png';
import external from '../assets/imgs/externalLink.png';
import Fufu from '../assets/imgs/projects/Fufu.png';
import PDFast from '../assets/imgs/projects/PDFast.png';

function Projects() {
    return (
        <div className="projectsPageContainer">
            <Navbar />
            <Background />
            <h1 className="title">My Projects</h1>
            <div className="pageContainer">
    
                <div className="projectCard">
                    <div className="projectTitle">PDFast</div>
                    <div className="projectDescription">PDFast is a tool designed to extract, summarize, and translate the content of PDF files quickly
                        and conveniently. With an intuitive interface, the application allows you to save time by transforming lengthy documents into clear
                        and accessible summaries in Portuguese.</div>
                    <div className="images">
                        <img src={PDFast} className="projectImage" alt="Project Thumbnail"></img>
                    </div>
                    <div className="projectTech">
                        <h1>Technologies Used:</h1> 
                        <p>Python, Tkinter, Cohere AI</p>
                    </div>
                    <div className="projectIcons" style={{marginLeft: "90%"}}>
                        <a href="https://github.com/CaioaPy/PDFast" target="_blank"><img src={github} className="projectIcon" alt="GitHub Icon"></img></a>
                    </div>
                </div>
                <div className="projectCard">
                    <div className="projectTitle">Fufu</div>
                    <div className="projectDescription">Fufu is a dynamic web platform designed to enhance your RPG experiences with ease and creativity.
                        Whether you're rolling dice, generating unique characters, or crafting entire adventures, Fufu provides the tools needed to elevate
                        your role-playing sessions.</div>
                    <div className="images">
                        <img src={Fufu} className="projectImage" alt="Project Thumbnail"></img>
                    </div>
                    <div className="projectTech">
                        <h1>Technologies Used:</h1> 
                        <p>.NET, C#, ASP.NET MVC,React, JavaScript, HTML, CSS</p>
                    </div>
                    <div className="projectIcons">
                        <a href="https://github.com/CaioaPy/Fufu/tree/master" target="_blank"><img src={github} className="projectIcon" alt="GitHub Icon"></img></a>
                        <a href="fufu-pi.vercel.app" target="_blank"><img src={external} className="projectIcon" alt="External Link Icon"></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;