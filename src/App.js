import Footer from "./Componentes/Footer";
import Main from "./Componentes/Main";
import Header from "./Componentes/Header";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./contexts/cartContext";
import { useState } from "react";
import CustomProvider from "./Componentes/CustomProvider";

function App() {

  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);

  return (
    <CartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
      <BrowserRouter>
      <CustomProvider>
        <Header/>
        <Main/>
        <Footer/>
      </CustomProvider>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App;