import { initializeApp } from "firebase/app";
import { collection, getDocs, addDoc, getFirestore, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-IJ4Nym1N957Ms_F_HEACMNeNnjoIYHo",
  authDomain: "mai-roman.firebaseapp.com",
  projectId: "mai-roman",
  storageBucket: "mai-roman.appspot.com",
  messagingSenderId: "1073529135662",
  appId: "1:1073529135662:web:a3e44c1b99dd618eae75bf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);




export const getProductos = () => {
    const productosCollection = collection(db, "productos");
    return getDocs(productosCollection)
        .then((respuesta) => {

            const array = respuesta.docs
            const resultado = array.map((doc) => {

                const id= doc.id
                const data = doc.data()
                data.id = id

                return data
            })

            return resultado
        })
        .catch((error) => {
            console.log("Hubo un error");
        })
}



export const getProductosCategory = (categoria) => {
    const productosCollection = collection(db, "productos")
    const fil = query(productosCollection,where("category","in",categoria))
    return getDocs(fil)
    .then((respuesta) => {
        const array = respuesta.docs
            const resultado = array.map((doc) => {

                const id = doc.id
                const data = doc.data()
                data.id = id

                return data
            })

            return resultado
    })
    .catch((error) => {
        console.log("Hubo un error");
    })
}



export const crearVenta = (venta) => {

    console.log("creando venta")
    const comprasCollection = collection(db, "ventas")
    return addDoc(comprasCollection,venta)
        .then((respuesta) => {
            return respuesta.id
        })
        .catch((error) => {
            console.log(error)
        })
}