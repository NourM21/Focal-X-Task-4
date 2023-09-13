import Head from "./../Head/Head"
import NavBar from "./../NavBar/NavBar"
import Hero from "./../Hero/Hero"
import { headInfo, headBtns, logo, links, enroll } from "./../../Data/HeaderData.js"
import "./HeaderStyle.css"

const Header = ({title, para_2, btn}) => {
    return (
        <div className="header">
            <Head headInfo={headInfo} headBtns={headBtns}/>
            <NavBar logo={logo} links={links} enroll={enroll} />
            <Hero title={title} para_2={para_2} btn={btn}/>
        </div>
    )
}

export default Header