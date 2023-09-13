import Header from "./../Components/Header/Header.jsx"
import AboutComponent from "../Components/AboutComponent/AboutComponent.jsx"
import { title, para_2, btn } from "./../Data/AboutPageData.js"

const AboutPage = () => {
    return (
        <>
            <Header title={title} para_2={para_2} btn={btn}/>
            <AboutComponent />
        </>
    )
}

export default AboutPage