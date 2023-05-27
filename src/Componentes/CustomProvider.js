import { createContext } from "react";


export const contexto = createContext()

export const {Provider} = contexto

const CustomProvider = ({children}) => {

    const agregar = (producto, cantidad) => {
        console.log("Guardando")
    }

    const valorContexto = {
        nombre : "Maia",
        carrito : [],
        agregar : agregar
    }

    return (
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )

}

export default CustomProvider;