import ItemListContainer from "./ItemListContainer";
import Productos from "../pages/Productos";
import Carrito from "./Carrito";
import { Route, Routes } from "react-router-dom";

const Main = () => {

    return (
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            
            <Route path="/Category/:id" element={<Productos/>}/>

            <Route path="/Carrito" element={<Carrito/>}/>
        </Routes>
    )
}

export default Main;