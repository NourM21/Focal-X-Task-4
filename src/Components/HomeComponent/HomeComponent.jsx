import './HomeComponentStyle.css'
import BrowseCat from "./../BrowseCat/BrowseCat"
import BecomeInstructor from "./../BecomeInstructor/BecomeInstructor"
import BestEducation from '../BestEducation/BestEducation'
import NewsComponent from './../NewsComponent/NewsComponent'
import ChooseUs from './../ChooseUs/ChooseUs'
import { browseTitle, browseCatCards } from './../../Data/HomePageData'
import { cards } from "./../../Data/NewsPageData.js"
import { bestEduCards, bestEduTitle, bestEduPara, image, chooseTitle, chooseText, accInfo } from "./../../Data/AboutPageData"

const HomeComponent = () => {
    return (
        <div className='home-comp'>
            <BrowseCat browseTitle={browseTitle} browseCatCards={browseCatCards}/>
            <BecomeInstructor />
            <BestEducation bestEduCards={bestEduCards} bestEduTitle={bestEduTitle} bestEduPara={bestEduPara}/>
            <NewsComponent cards={cards}/>
            <ChooseUs image={image} chooseTitle={chooseTitle} chooseText={chooseText} accInfo={accInfo}/>
        </div>
    )
}

export default HomeComponent