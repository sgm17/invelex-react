import { Link, useLocation } from "react-router-dom"
import "./Nav.css"
import logo from "../assets/logo.png"

interface NavItem {
    name: string,
    endpoint: string,
    active: Boolean
}

function Nav() {
    const location = useLocation(); // Get the current URL location

    const navigationItems: NavItem[] = [
        {
            name: "Projects",
            endpoint: '#projects',
            active: false
        },
        {
            name: "Team",
            endpoint: '#team',
            active: false
        },
        {
            name: "Blog",
            endpoint: '/blog',
            active: true
        },
        {
            name: "Podcasts",
            endpoint: '/podcasts',
            active: true
        }
    ]

    return <div className="nav-wrapper">
        <Link to={"/"}>
            <img src={logo} alt="" />
        </Link>
        <ul className="nav-list">
            {navigationItems.map((e, index) => (
                <li className="nav-item" key={index}>
                    <Link
                        className={e.active && location.pathname === e.endpoint ? 'active' : ''}
                        to={e.endpoint}>{e.name}</Link>
                </li>
            ))}
        </ul>
    </div>
}

export default Nav