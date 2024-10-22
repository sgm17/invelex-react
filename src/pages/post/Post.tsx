import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import { useParams } from 'react-router-dom';
import { postsData } from "./posts-data";
import "./Post.css"
import "./Post"

function Post() {
    const { slug } = useParams()
    const post = postsData.find((e) => e.slug === slug)

    if (!post) {
        return <div>Post not found</div>
    }

    return <div className="post-wrapper">
        <Nav />
        <div className="post-title">
            {post.title}
        </div>
        <div className="post-subheader">
            <div className="post-creation-date">
                {formatDate(post.createdAt)}
            </div>
            <div className="post-views">
                {post.views} views
            </div>
        </div>
        <div className="post-image">
            <img src={post.image} alt="" />
        </div>
        <div className="post-body">
            {post.body}
        </div>
        <Footer />
    </div>

}

const formatDate = (createdAt: number) => {
    const date = new Date(createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return `Posted on ${date.toLocaleDateString('en-US', options as any)}`;
};

export default Post