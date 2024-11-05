import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
import Data from "./Data";
import EndData from "./EndData";
import TopData from "./TopData";


const App=()=>{
  return(
<>
    <Header/>
    <TopMenu/>
    <Content/>
    <BottomMenu/>
   
    <TopData/>
    <Data/>
    <EndData/>
    <Footer/>

    </>
  )
  
}
export default App;