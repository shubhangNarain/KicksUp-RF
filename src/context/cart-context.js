import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cart-reducer";

const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] })
    return (
        <cartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </cartContext.Provider>
    )
}
const useCart = () => useContext(cartContext)

export { useCart, CartProvider }