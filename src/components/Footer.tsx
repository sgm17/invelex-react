import "./Footer.css"

interface FooterItem {
    name: string,
    link: string
}

function Footer() {

    const footerLinks: FooterItem[] = [
        {
            name: "Youtube",
            link: "https://www.youtube.com/watch?v=QzjFmjij9qQ"
        },
        {
            name: "Spotify",
            link: "https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL"
        },
        {
            name: "TikTok",
            link: "https://www.tiktok.com/"
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/"
        }
    ]

    return <div className="footer-wrapper">
        <div className="footer-copyright">
            © Invelex 2024
        </div>
        <ul className="footer-list">
            {footerLinks.map((e, index) => (
                <li className="footer-item" key={index}>
                    <a href={e.link} target="_blank" rel="noopener noreferrer">
                        {e.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
}

export default Footer