import { Container, FormText } from "react-bootstrap";
import TopMenu from "./components/TopMenu";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Toggle from "./components/Toggle";
// import FormText from "react-bootstrap";
import Alert from "./components/Alert";
import { Footer } from "./components/Footer";

const App=()=>{
  return(
    <>
      <Container>
        <TopMenu/>
        <aside>
          <Toggle/>
          
          
        </aside>
        <Banner/>
        <Home/>
        <Alert/>
        <Footer/>
        
        
      </Container>
    
    </>
  )
}

export default App;