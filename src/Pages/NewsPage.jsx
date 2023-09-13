import Header from "./../Components/Header/Header.jsx"
import NewsComponent from "../Components/NewsComponent/NewsComponent.jsx"
import { title, para_2, btn, cards } from "./../Data/NewsPageData.js"

const NewsPage = () => {
    return (
        <>
            <Header title={title} para_2={para_2} btn={btn}/>
            <NewsComponent cards={cards}/>
        </>
    )
}

export default NewsPage