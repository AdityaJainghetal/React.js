import { Container } from "react-bootstrap";
import TopMenu from "./components/TopMenu";
import Banner from "./components/Banner";
import Home from "./pages/Home";

const App=()=>{
  return(
    <>
      <Container>
        <TopMenu/>
        <Banner/>
        <Home/>
      </Container>
    
    </>
  )
}

export default App;