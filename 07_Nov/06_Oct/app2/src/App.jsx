import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import NotFound from "./NotFound";
import AboutCompany from "./AboutCompany";
import AboutProduct from "./AboutProduct";
import AboutService from "./AboutService";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/> 
        <Route path="about" element={<About/>}>
        <Route path="aboutcompany" element={<AboutCompany/>}/>
        <Route path="aboutproduct" element={<AboutProduct/>}/>
        <Route path="aboutservice" element={<AboutService/>}/>
      </Route>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App;