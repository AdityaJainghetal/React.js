import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import CheckOut from "./pages/CheckOut";
import MenCollections from "./pages/MenCollections";
import WoMenCollections from "./pages/WomenCollections";
import KidsCollections from "./pages/KidsCollections";
import SearchProduct from "./pages/SearchProduct";
import ShowProduct from "./pages/ShowProduct";


const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>} />
            <Route path="men" element={<MenCollections/>}/>
            <Route path="women" element={<WoMenCollections/>}/>
            <Route path="kids" element={<KidsCollections/>} />
            <Route path="search" element={<SearchProduct/>} />
            <Route path="showproduct/:myid" element={<ShowProduct/>} />


            <Route path="mycart" element={<MyCart/>}/>
            <Route path="checkout" element={<CheckOut/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App;