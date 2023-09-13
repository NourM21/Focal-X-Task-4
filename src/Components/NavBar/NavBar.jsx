import "./NavBarStyle.css"

const NavBar = ({logo, links, enroll}) => {
    return (
        <nav className="navbar">
            <a className="logo">{logo}</a>
            <ul>
                {links.map((link) => <li key={link.id}>{link.text}</li>)}
            </ul>
            <button>{enroll}</button>
        </nav>
    )
}

export default NavBar