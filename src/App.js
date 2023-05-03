import Footer from "./Componentes/Footer";
import Main from "./Componentes/Main";
import Header from "./Componentes/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  
  )
}

export default App;