import ItemListContainer from "./ItemListContainer";
import Carrito from "./Carrito";
import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import DetailProduct from "../pages/DetailProduct";

const Main = () => {

    return (
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            
            <Route path="/Category/:id" element={<Category/>}/>
            
            <Route path="/Item/:id" element={<DetailProduct/>}/>

            <Route path="/Carrito" element={<Carrito/>}/>
        </Routes>
    )
}

export default Main;