import { Link, useLocation } from "react-router-dom"
import "./Nav.css"
import logo from "../assets/logo.png"

interface NavItem {
    name: string,
    endpoint: string
}

function Nav() {
    const location = useLocation(); // Get the current URL location

    const navigationItems: NavItem[] = [
        {
            name: "Projects",
            endpoint: '/#projects'
        },
        {
            name: "Team",
            endpoint: '/#team'
        },
        {
            name: "Blog",
            endpoint: '/blog'
        },
        {
            name: "Podcasts",
            endpoint: '/podcasts'
        }
    ]

    console.log(location.pathname.split("/"))

    return <div className="nav-wrapper">
        <Link to={"/"}>
            <img src={logo} alt="" />
        </Link>
        <ul className="nav-list">
            {navigationItems.map((e, index) => (
                <li className="nav-item" key={index}>
                    <Link
                        className={location.pathname.split("/").includes(e.endpoint.replace("/", "").replace("#", "")) || location.hash.includes(e.endpoint.substring(1)) ? 'active' : ''}
                        to={e.endpoint}>{e.name}</Link>
                </li>
            ))}
        </ul>
    </div>
}

export default Nav