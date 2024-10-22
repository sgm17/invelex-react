import { podcastItems } from "../podcasts/podcasts-data";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import "./Podcast.css"

function Podcast() {
    const { slug } = useParams()
    const podcast = podcastItems.find((e) => e.slug === slug)

    if (!podcast) {
        return <div>Post not found</div>
    }

    return <div className="post-wrapper">
        <Nav />
        <div className="podcast-date">
            {formatDate(podcast.createdAt)}
        </div>
        <div className="podcast-columns">
            <div className="podcast-data-column">
                <div className="podcast-title">
                    {podcast.title}
                </div>
                <div className="podcast-description">
                    Welcome to this new installment of Extra Spicy in which Euge brings together 3 ecommerce and digital marketing experts to talk about their companies and the best strategies to grow online businesses. Join this chat with Arnau Cuenca, founder of Northplanner, Roger Viladrosa, Founder Vilvic Media and Ion Draghita, Founder Fancy Haus.
                </div>
                <Link to={"/podcasts"}>
                    <div className="podcast-return-button">
                        <div className="podcast-return-text">
                            Return to the library
                        </div>
                    </div>
                </Link>
            </div>
            <div className="video-column">
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
                <div className="podcast-participants">
                    Joan Cuesta, fundador de VisionIA | Sergi Garcia, fundador de Invelex |
                    Robert Marquès, fundador de Prometeus
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

const formatDate = (createdAt: number) => {
    const date = new Date(createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options as any);
}

export default Podcast