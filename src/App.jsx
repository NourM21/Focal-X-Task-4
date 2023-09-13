import './App.css'
import NewsPage from "./Pages/NewsPage"
import AboutPage from './Pages/AboutPage'
import HomePage from "./Pages/HomePage"
import Footer from "./Components/Footer/Footer"
import { BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter basename={'Focal-X-Task-4'}>
        <Routes>
          <Route exact path='/' element = {<HomePage />}></Route>
          <Route exact path='/about' element = {<AboutPage />}></Route>
          <Route exact path='/news' element = {<NewsPage />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
