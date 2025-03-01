import Background from "../components/Background";
import Navbar from "../components/Navbar";
import './About.css';

function About() {
    return (
        <div className="start-container">
            <Navbar />
            <Background />
            <div className="startContainerAbout">
                <h1>About</h1>
                <div className="paragraph1">
                    <p>
                        Hello, my name is Caio. I am a Full Stack Developer. Currently, I specialize in building scalable, secure, and high-performance systems.
                        I am passionate about learning new technologies and frameworks, always eager to take on new challenges and grow.
                    </p>
                    <br></br>
                    <p>
                     I thrive on expanding my skill set and staying up-to-date with the latest advancements in the tech world. Check out
                    the icons below to see the tools I use to bring my projects to life.
                    </p>
                    <br></br>
                    <img className="icons" src="https://skillicons.dev/icons?i=dotnet,cs,ts,react,vite,js,nodejs,py,html,css,aws,azure,docker,mysql,postgresql,git,postman,github,vercel&perline=7"></img>
                </div>
                <br></br>
                <h1>Certifications</h1>
            </div>
        </div>
    );
}


export default About;