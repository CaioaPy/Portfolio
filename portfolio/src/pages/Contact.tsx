import Navbar from "../components/Navbar";
import './Contact.css';
import Background from "../components/Background";

function Contact() {
    return (
        <div className="start-container">
            <Background />
            <Navbar />
            <div className="mainContent">
                <h1 className="titleH1">Let's Get In Touch</h1>
                <h2 className="contactText">I'm always open to new opportunities and exciting collaborations!
                    Whether you have a question or want to work together on a project, feel free to reach out.
                    My inbox is always open, and I'll do my best to respond as soon as possible.</h2>
                <h2 className="callToSocials">Reach me on my socials:</h2>
                <div className="socialIcons">
                    <a href="https://linkedin.com/in/caioapy/" target="_blank"><img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn"></img></a>
                    <a href="mailto:contatomikazuchi@gmail.com" ><img src="https://skillicons.dev/icons?i=gmail" alt="Gmail"></img></a>
                    <a href="https://github.com/CaioaPy" target="_blank"><img src="https://skillicons.dev/icons?i=github" alt="GitHub"></img></a>
                </div>
            </div>
        </div>
    );
}


export default Contact;