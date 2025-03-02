import Background from "../components/Background";
import Navbar from "../components/Navbar";
import './About.css';

function About() {
    return (
        <div className="start-container">
            <Navbar />
            <Background />
            <div className="startContainerAbout">
                <h1 className="h11">About</h1>
                <div className="mainText">
                    <p className="p1">
                        Hello, my name is Caio. I am a Full Stack Developer. Currently, I specialize in building scalable, secure, and high-performance systems.
                        I am passionate about learning new technologies and frameworks, always eager to take on new challenges and grow.
                    </p>
                    <br></br>
                    <p className="p2">
                     I thrive on expanding my skill set and staying up-to-date with the latest advancements in the tech world. Check out
                    the icons below to see the tools I use to bring my projects to life.
                    </p>
                    <br></br>
                    <div className="icons">
                        <img className="icon1" src="https://skillicons.dev/icons?i=dotnet"></img>
                        <img className="icon2" src="https://skillicons.dev/icons?i=cs"></img>
                        <img className="icon3" src="https://skillicons.dev/icons?i=ts"></img>
                        <img className="icon4" src="https://skillicons.dev/icons?i=react"></img>
                        <img className="icon5" src="https://skillicons.dev/icons?i=vite"></img>
                        <img className="icon6" src="https://skillicons.dev/icons?i=js"></img>
                        <img className="icon7" src="https://skillicons.dev/icons?i=nodejs"></img>
                        <img className="icon8" src="https://skillicons.dev/icons?i=py"></img>
                        <img className="icon9" src="https://skillicons.dev/icons?i=html"></img>
                        <img className="icon10" src="https://skillicons.dev/icons?i=css"></img>
                        <img className="icon11" src="https://skillicons.dev/icons?i=aws"></img>
                        <img className="icon12" src="https://skillicons.dev/icons?i=azure"></img>
                        <img className="icon13" src="https://skillicons.dev/icons?i=docker"></img>
                        <img className="icon14" src="https://skillicons.dev/icons?i=mysql"></img>
                        <img className="icon15" src="https://skillicons.dev/icons?i=postgresql"></img>
                        <img className="icon16" src="https://skillicons.dev/icons?i=git"></img>
                        <img className="icon17" src="https://skillicons.dev/icons?i=postman"></img>
                        <img className="icon18" src="https://skillicons.dev/icons?i=github"></img>
                        <img className="icon19" src="https://skillicons.dev/icons?i=vercel"></img>
                    </div>
                </div>
                <br></br>
                <h1 className="h12">Certifications</h1>
            </div>
        </div>
    );
}


export default About;