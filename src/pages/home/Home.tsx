import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import "./Home.css"
import IphoneMockup from "../../assets/iphone_mockup.png"
import ScreenshotMockup from "../../assets/home.png"
import MemberImage from "../../assets/team.png"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#projects') {
            const element = document.getElementById('projects');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (location.hash === '#team') {
            const element = document.getElementById('team');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return <div className="home-wrapper">
        <Nav />
        <div className="home-header">
            Solving real-world problems with<br />innovative software solutions
        </div>
        <div className="latest-wrapper">
            <div className="latest-sign">
                Latest
            </div>
            <div className="latest-link">
                <Link to={""}>invelex/Start A New Flutter Project</Link>
            </div>
        </div>
        <div className="bibliography-text">
            Since I was a kid, I have realized how powerful software is. Immersed in the technological age, everything around us is aimed at solving real-world problems. That’s the goal of Invelex. Invelex is a holding company of applications whose objective is to address real-world issues through software. Additionally, it contributes to the developer community through its blog and podcasts.
        </div>
        <div className="home-title" id="projects">
            Projects
        </div>
        <div className="projects-grid">
            <div className="project-item">
                <ul>
                    <li>SOCIALICE</li>
                    <li>1M Users</li>
                    <li>0$/month</li>
                </ul>
                <div className="screenshot-container">
                    <div className="mockup-container">
                        <img src={ScreenshotMockup} alt=""></img>
                    </div>
                    <div className="iphone-container">
                        <img src={IphoneMockup} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="project-item">
                <ul>
                    <li>SOCIALICE</li>
                    <li>1M Users</li>
                    <li>0$/month</li>
                </ul>
                <div className="screenshot-container">
                    <div className="mockup-container">
                        <img src={ScreenshotMockup} alt=""></img>
                    </div>
                    <div className="iphone-container">
                        <img src={IphoneMockup} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="project-item">
                <ul>
                    <li>SOCIALICE</li>
                    <li>1M Users</li>
                    <li>0$/month</li>
                </ul>
                <div className="screenshot-container">
                    <div className="mockup-container">
                        <img src={ScreenshotMockup} alt=""></img>
                    </div>
                    <div className="iphone-container">
                        <img src={IphoneMockup} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="project-item">
                <ul>
                    <li>SOCIALICE</li>
                    <li>1M Users</li>
                    <li>0$/month</li>
                </ul>
                <div className="screenshot-container">
                    <div className="mockup-container">
                        <img src={ScreenshotMockup} alt=""></img>
                    </div>
                    <div className="iphone-container">
                        <img src={IphoneMockup} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-title" id="team">
            Team
        </div>
        <div className="team-grid">
            <div className="member-element">
                <img src={MemberImage} alt="" />
                <ul>
                    <li>Sergi Garcia</li>
                    <li>Software Developer</li>
                </ul>
            </div>
            <div className="member-element">
                <img src={MemberImage} alt="" />
                <ul>
                    <li>Sergi Garcia</li>
                    <li>Software Developer</li>
                </ul>
            </div>
            <div className="member-element">
                <img src={MemberImage} alt="" />
                <ul>
                    <li>Sergi Garcia</li>
                    <li>Software Developer</li>
                </ul>
            </div>
            <div className="member-element">
                <img src={MemberImage} alt="" />
                <ul>
                    <li>Sergi Garcia</li>
                    <li>Software Developer</li>
                </ul>
            </div>
        </div>
        <Footer />
    </div>
}

export default Home