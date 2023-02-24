import lawyer from './assets/Lawyer.jpeg'
import './App.scss'
import Home from './components/home/home'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import PractiseAreas from './pages/PractiseAreas/PractiseAreas'
import NewsAndUpdates from './pages/News&Updates/News&Updates'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
function App() {

  return (
  <BrowserRouter>
    <div className="App">
      <Navbar/>
         <Routes>
            <Route path='/Lawyers' element={<Home/>}/>
            <Route path='/Lawyers/about-us' element={<AboutUs/>}/>
            <Route path='/Lawyers/contact-us' element={<ContactUs/>} />
            <Route path='/Lawyers/practise-areas' element={<PractiseAreas/>}/>
            <Route path='/Lawyers/news-updates' element={<NewsAndUpdates/>}/>
         </Routes>
      <Footer/>
    </div>
</BrowserRouter>
  )
}

export default App