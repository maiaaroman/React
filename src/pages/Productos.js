import { useParams } from "react-router-dom";
import Page from "../Componentes/Page";

const Productos = () => {

    const resultado = useParams()
    console.log(resultado.id);

    return <>
    <Page title="Productos de esta categoria">
        {resultado.id}
    </Page>
    </>
}

export default Productos;