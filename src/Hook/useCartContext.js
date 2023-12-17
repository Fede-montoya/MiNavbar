import { useContext } from "react";
import CartContext from "../components/CartContext/CartContext";

const useCartContext = () => {
    const { addToCart, /* otras propiedades o funciones que necesites */ } = useContext(CartContext);

    return {
        addToCart,
        // ... otras propiedades o funciones que necesites
    };
};

export default useCartContext;
