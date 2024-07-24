import './App.css'
import Navbar from './Components/Section/Navbar'
import Tecnologia from './Components/Section/Tecnologia'
import Projects from './Components/Section/Projects'
import About from './Components/Section/About'
import Footer from './Components/Section/Footer'



function App() {
  

  return (
   
     <>
    <div className="App">
    <div className="animated-background"></div>
    <div className="content"></div>
    <Navbar/>
    <Tecnologia/>
    <Projects/>
    <About/>
    <Footer/>
    </div>
    </> 
    
  )
}

export default App
