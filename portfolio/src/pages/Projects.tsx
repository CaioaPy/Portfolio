import Navbar from "../components/Navbar";
import Background from '../components/Background';
import './Projects.css';
import github from '../assets/imgs/github.png';
import external from '../assets/imgs/externalLink.png';
import Fufu from '../assets/imgs/projects/Fufu.png';
import PDFast from '../assets/imgs/projects/PDFast.png';
import bookNight from '../assets/imgs/projects/bookNight.png'
import TULT from '../assets/imgs/projects/TULT.jpeg';
import skillBoost from '../assets/imgs/projects/skillBoost.png';

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
                        <a href="https://fufu-pi.vercel.app" target="_blank"><img src={external} className="projectIcon" alt="External Link Icon"></img></a>
                    </div>
                </div>
                <div className="projectCard">
                    <div className="projectTitle">Book Night</div>
                    <div className="projectDescription">Book Night is a fully functional e-commerce platform designed to enhance the online book shopping experience.
                         It features a user-friendly interface for browsing books, managing shopping carts, and secure login. Built with HTML, CSS, and JavaScript,
                          the platform ensures responsiveness and engagement. In collaboration with Davi Miguel, key features like user management and cart systems
                           meet modern e-commerce standards. Continuous optimization enhances functionality, user satisfaction, and conversion rates, leveraging best
                            practices in front-end and back-end integration for secure transactions.</div>
                    <div className="images">
                        <img src={bookNight} className="projectImage" alt="Project Thumbnail"></img>
                    </div>
                    <div className="projectTech">
                        <h1>Technologies Used:</h1> 
                        <p>JavaScript, HTML, CSS</p>
                    </div>
                    <div className="projectIcons">
                        <a href="https://github.com/CaioaPy/Book-Night" target="_blank"><img src={github} className="projectIcon" alt="GitHub Icon"></img></a>
                        <a href="https://book-night.vercel.app/index.html" target="_blank"><img src={external} className="projectIcon" alt="External Link Icon"></img></a>
                    </div>
                </div>
                <div className="projectCard">
                    <div className="projectTitle">SkillBoost</div>
                    <div className="projectDescription">Skillboost is an integrative project developed in the Systems Analysis course.
                         The project aims to simulate a fictional online course sales platform, where users can explore and enroll in courses,
                          and sellers can register and manage the available content.</div>
                    <div className="images">
                        <img src={skillBoost} className="projectImage" alt="Project Thumbnail"></img>
                    </div>
                    <div className="projectTech">
                        <h1>Technologies Used:</h1> 
                        <p>Java, MySQL, HTML, CSS</p>
                    </div>
                    <div className="projectIcons" style={{marginLeft: "90%"}}>
                        <a href="https://github.com/CaioaPy/SkillBoost" target="_blank"><img src={github} className="projectIcon" alt="GitHub Icon"></img></a>
                    </div>
                </div>
                <div className="projectCard">
                    <div className="projectTitle">TULT</div>
                    <div className="projectDescription">TULT (The ultimate luck test) is an web-based project designed to showcase the concept of luck through the use of Random Number Generators (RNG)
                    The main goal of this project is to provide users with an engaging and interactive platform that demonstrates how randomness
                     can be perceived as luck, while also maintaining a competitive element through a leaderboard that tracks the luckiest participants.</div>
                    <div className="images">
                        <img src={TULT} className="projectImage" alt="Project Thumbnail"></img>
                    </div>
                    <div className="projectTech">
                        <h1>Technologies Used:</h1> 
                        <p>JavaScript, HTML, CSS, MySQL</p>
                    </div>
                    <div className="projectIcons">
                        <a href="https://github.com/CaioaPy/The-Ultimate-Luck-Test" target="_blank"><img src={github} className="projectIcon" alt="GitHub Icon"></img></a>
                        <a href="https://tult.vercel.app" target="_blank"><img src={external} className="projectIcon" alt="External Link Icon"></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
