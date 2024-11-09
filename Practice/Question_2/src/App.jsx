import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Faculty from "./Faculty";
import Course from "./Course";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/> 
        <Route path="about" element={<About/>}/>
        
     
        <Route path="contact" element={<Contact/>}/>
        <Route path="faculty" element={<Faculty/>}/>
        <Route path="Course" element={<Course/>}/>
    
      </Route>
    </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App;