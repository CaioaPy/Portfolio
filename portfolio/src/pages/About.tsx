import Background from "../components/Background";
import Navbar from "../components/Navbar";
import './About.css';
import scrumCert from "../assets/imgs/certificationScrumFundation.png"
import dataCert from "../assets/imgs/certificationDataAnalyticsEssentials.png"
import cloudCert from "../assets/imgs/certificationCloudOracle.png"
import AICert from "../assets/imgs/certificationAIOracle.png"

function About() {
    return (
        <div className="start-container">
            <Navbar />
            <Background />
            <div className="startContainerAbout">
                <h1 className="h11">About Me</h1>
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
                        <h1 className="techH1">My tech stack</h1>
                        <br></br>
                        <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" alt="C#"></img>
                        <img src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" alt=".NET"></img>
                        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></img>
                        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript"></img>
                        <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React"></img>
                        <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS"></img>
                        <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python"></img>
                        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"></img>
                        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"></img>
                        <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS"></img>
                        <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"></img>
                        <img src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white" alt="Azure"></img>
                        <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"></img>
                        <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"></img>
                        <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"></img>
                        <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git"></img>
                        <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman"></img>
                        <img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white" alt="Swagger"></img>
                        <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"></img>
                    </div>
                </div>
                <h1 className="h12">Certifications</h1>
                <div className="certifications">
                    <a href="www.credly.com/badges/2b629958-b1a5-4a0c-81b5-a4c8f39f7bf8" target="_blank"><img className="certImg1" src={scrumCert}></img></a>
                    <a href="https://www.credly.com/badges/b9551de1-6043-494a-8713-53982de27e9a" target="_blank"><img className="certImg2" src={dataCert}></img></a>
                    <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=2C1CBD113F292C7003C5C357F11586322554F0C8B4EBD6C6FDC19BC55AC9141C" target="_blank"><img className="certImg3" src={cloudCert}></img></a>
                    <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=3A4FF1E80A57C4DAF5EB650348163560D1FCB864DF3C2DA6CF22CFC4181BCDA0" target="_blank"><img className="certImg4" src={AICert}></img></a>
                </div>
            </div>
            <div className="chartContainer">
                <img className="chart" src="https://github-readme-stats.vercel.app/api/top-langs/?username=CaioaPy&layout=donut&hide=html,css,java&bg_color=121212&text_color=FFFFFF&title_color=FFFFFF"></img>
            </div>
        </div>
    );
}


export default About;