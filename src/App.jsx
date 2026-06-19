import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Experience from "./Components/Experience"
import Skills from "./Components/Skills"
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import ScrollToTop from "./Components/ScrollToTop";



function App() {

   useEffect(() => {
        try {
            const audio = new Audio("./assets/Mehta.mp3"); 
            audio.play();
        } catch (e) {
            console.log("Error playing audio:", e);
        }
    }, []);

  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
     <Navbar/>
     <div className="container">
     <Home/>
     <Experience/>
      <Skills/>
      <Projects/> 
      <Contact/>
         <ScrollToTop />
     </div>
    </>
  )
}

export default App
