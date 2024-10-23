import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import { projectsData } from "../home/projects-data"
import PlayStore from "../../assets/play-store.png"
import AppStore from "../../assets/app-store.png"
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
        <Footer />
    </div>
}

const formatDate = (createdAt: number) => {
    const date = new Date(createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return `Posted on ${date.toLocaleDateString('en-US', options as any)}`;
};

export default Project