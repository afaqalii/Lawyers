import lawyer from './assets/Lawyer.jpeg'
import './App.scss'
import Home from './components/home/home'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import PractiseAreas from './pages/PractiseAreas/PractiseAreas'
import NewsAndUpdates from './pages/News&Updates/News&Updates'

function App() {

  return (
    <div className="App">
      {/* <Home/> */}
      {/* <AboutUs/>   */}
      {/* <ContactUs/> */}
      <PractiseAreas/>
       {/* <NewsAndUpdates/> */}
    </div>
  )
}

export default App