import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import "./Blog.css"
import { postsData } from "../post/posts-data"

function Blog() {
    return <div className="blog-wrapper">
        <Nav />
        <div className="blog-title">
            Blog
        </div>
        <div className="blog-description">
            I write about software development, the deployment to production and pipelines automatization, the news and trends in the market, the best practices and implementations for a certain functionality
        </div>
        <div className="blog-list-wrapper">
            <ul>
                {postsData.map((e, index) => <li key={index}>
                    <Link to={`/blog/${e.slug}`}>
                        <div className="blog-entry-wrapper">
                            <div className="blog-entry-header">
                                <div className="blog-entry-title">
                                    {e.title}
                                </div>
                                <div className="blog-entry-views">
                                    {e.views} views
                                </div>
                            </div>
                            <div className="blog-entry-description">
                                {e.description}
                            </div>
                        </div>
                    </Link>
                </li>)}
            </ul>
        </div>
        <Footer />
    </div>
}

export default Blog