
import Footer from "./components/Footer"
import { Home } from "./components/Home"
import { NavBar } from "./components/NavBar"
import { Quotes } from "./components/Quotes"
import Services from "./components/Services"
export default function App() {
  return (
    <>
      <NavBar/>
      <div className="md:ml-32.mr-32 ml-5 mr-5">
      <Home/>
      <Quotes/>
      <Services/>
     
      </div>
      <Footer/>
    </>

  )
}