import Header from "./../Components/Header/Header.jsx"
import HomeComponent from "./../Components/HomeComponent/HomeComponent"
import { title, para_2, btn } from "./../Data/HomePageData.js"

const HomePage = () => {
    return (
        <>
            <Header title={title} para_2={para_2} btn={btn}/>
            <HomeComponent />
        </>
    )
}

export default HomePage