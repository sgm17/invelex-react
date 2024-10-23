import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import { projectsData } from "../home/projects-data"
import PlayStore from "../../assets/play-store.png"
import AppStore from "../../assets/app-store.png"
import ScreenshotMockup from "../../assets/home.png"
import IphoneMockup from "../../assets/iphone_mockup.png"
import "./Project.css"

function Project() {
    const { slug } = useParams()
    const project = projectsData.find((e) => e.slug === slug)

    if (!project) {
        return <div>Project not found</div>
    }

    return <div className="project-wrapper">
        <Nav />
        <div className="project-header">
            <div className="project-title">
                {project.name}
            </div>
            <div className="project-stores">
                <a href="https://play.google.com/store/games?hl=es_ES" target="_blank">
                    <img src={PlayStore} alt="" />
                </a>
                <a href="https://play.google.com/store/games?hl=es_ES" target="_blank">
                    <img src={AppStore} alt="" />
                </a>
            </div>
        </div>
        <div className="project-date">
            {formatDate(project.createdAt)}
        </div>
        <div className="project-description">
            {project.description}
        </div>
        <div className="video-container">
            <iframe
                width="653"
                height="326.5"
                src="https://www.youtube.com/embed/QzjFmjij9qQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="screenshots-title">
            Screenshots
        </div>
        <div className="screenshots-grid">
            {project.screenshots.map((e, index) => (
                <div>
                    <div className="project-container" key={index}>
                        <div className="project-screenshot">
                            <img src={ScreenshotMockup} alt="" />
                        </div>
                        <div className="iphone-image-container">
                            <img src={IphoneMockup} alt="" />
                        </div>
                    </div>
                    <div className="screenshot-description">
                        Home
                    </div>
                </div>
            ))}
        </div>
        <Footer />
    </div>
}

const formatDate = (createdAt: number) => {
    const date = new Date(createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return `Posted on ${date.toLocaleDateString('en-US', options as any)}`;
};

export default Project