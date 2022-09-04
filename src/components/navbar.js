import { NavLink } from "react-router-dom"
import { MdOutlinePerson } from "react-icons/md"
import { v4 as uuid } from "uuid"
export const Navbar = () => {
    const pages = [
        {
            _id: uuid(),
            name: "HOME",
            link: "/"
        },
        {
            _id: uuid(),
            name: "THE JOURNEY",
            link: "/journey"
        },
        {
            _id: uuid(),
            name: "TEAM",
            link: "/team"
        },
        {
            _id: uuid(),
            name: "STORE",
            link: "/store"
        },
        {
            _id: uuid(),
            name: "CONTACT",
            link: "/contact"
        }
    ]
    const activeStyle = ({isActive}) => ({
        borderBottom: isActive? "solid 3px black": "none"
    })
    return (
        <div className="navbar-div">
            <nav className="app-navbar">
                <div>
                    <img src="../assets/websitelogo.png" alt="web-logo"
                        className="web-logo-img"
                    ></img>
                </div>
                <div>
                    <ul className="nav-pages">
                        {pages.map(({ name, link, _id }) => (
                            <li key={_id}>
                                <NavLink to={link} className="page-link"
                                style={activeStyle}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="login-div">
                    <MdOutlinePerson
                        className="person-logo"
                    />
                    <span>GAGAN</span>
                </div>
            </nav>
        </div>
    )
}