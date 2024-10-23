import { MdOutlineFileDownload } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { FaStar, FaUsers } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";
import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import { projectsData } from "../home/projects-data"
import PlayStore from "../../assets/play-store.png"
import AppStore from "../../assets/app-store.png"
import ScreenshotMockup from "../../assets/home.png"
import IphoneMockup from "../../assets/iphone_mockup.png"
import { MdOutlineVerified } from "react-icons/md";
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
        <div className="screenshots-title">
            Core Metrics
        </div>
        <ul className="core-metrics-container">
            <li className="core-metrics-item">
                <MdOutlineFileDownload size="28" />
                {141} Downloads
            </li>
            <li className="core-metrics-item">
                <MdAttachMoney size="28" />
                {141}$/Month
            </li>
            <li className="core-metrics-item">
                <FaUsers size="28" />
                {1411} Active Users
            </li>
            <li className="core-metrics-item">
                <MdAdsClick size="28" />
                ADS Monetization
            </li>
        </ul>
        <div className="screenshots-title">
            Testimonials
        </div>
        <div className="rating-media">
            4.9
            <div className="rating-media-stars">
                {[...Array(6).keys() as any].slice(1).map((e, index) => (
                    // <FaRegStar fill="true" color="#FFD700" key={index} size={30} />
                    <FaStar color="#FFD700" fill="#FFD700" size={24} key={index} />
                )
                )}
            </div>
        </div>
        <div className="testimonials-grid">
            <div className="testimonial-item">
                <div className="testimonial-header">
                    <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className="testimonial-header-text">
                        <div className="testimonial-name">
                            Sergi Garcia Montmany
                        </div>
                        <div className="testimonial-verified-container">
                            <MdOutlineVerified color="#808080" size={20} />
                            Verified User
                        </div>
                    </div>
                </div>
                <div className="testimonial-rating-container">
                    <div >
                        {[...Array(6).keys() as any].slice(1).map((e, index) => (
                            // <FaRegStar fill="true" color="#FFD700" key={index} size={30} />
                            <FaStar color="#FFD700" fill="#FFD700" size={14} key={index} />
                        )
                        )}
                    </div>
                    {formatDate(Date.now())}
                </div>
                <div className="testimonial-comment">
                    recomiendo es la mejor comodidad para mi uso como todos los demás cada quien a si conveniencia pero aseguro que es muy buena opción
                </div>
            </div>
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