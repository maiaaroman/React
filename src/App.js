import Footer from "./Componentes/Footer";
import Main from "./Componentes/Main";
import Header from "./Componentes/Header";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./contexts/cartContext";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);

  return (
    <CartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App;