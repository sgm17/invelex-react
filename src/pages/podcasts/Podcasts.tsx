import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import Spotify from "../../assets/spotify.png"
import Youtube from "../../assets/youtube.png"
import { Link } from "react-router-dom"
import "./Podcasts.css"
import { podcastItems } from "./podcasts-data"

function Podcasts() {
    return <div className="podcasts-wrapper">
        <Nav />
        <div className="podcasts-header">
            <div className="podcasts-title">
                Podcasts
            </div>
            <div className="podcasts-social">
                <a href="https://www.spotify.com/" target="_blank">
                    <img src={Spotify} alt="" />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                    <img src={Youtube} alt="" />
                </a>
            </div>
        </div>
        <div className="podcasts-description">
            The main topic of the podcast is technology. Together, with brilliant guests, we will discuss the innovations their companies are working on and the next steps in the world of technology.
        </div>
        <div className="podcasts-grid">
            {podcastItems.map((e, index) =>
                <Link to={e.slug}>
                    <div className="podcast-item" key={index}>
                        <img src={e.image} alt="" />
                        <div className="podcast-content">
                            <div className="podcast-title">
                                {e.title}
                            </div>
                            <div className="podcast-date">
                                {formatDate(e.createdAt)}
                            </div>
                        </div>
                    </div>
                </Link>
            )
            }
        </div>
        <Footer />
    </div >
}

const formatDate = (createdAt: number) => {
    const date = new Date(createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return `Posted on ${date.toLocaleDateString('en-US', options as any)}`;
};

export default Podcasts