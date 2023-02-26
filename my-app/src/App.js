import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="container">

    <div className="rectangle-91">
      <Info />
   
      </div>  
    <div className="group-143">
      <About />
      <Interests /> 
    </div>
     
    <div>
      <Footer />
    </div>
    
    </div>
  )
}