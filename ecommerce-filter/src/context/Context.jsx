import {  useContext, useReducer } from "react";
import { shoppingCartReducer } from "./reducer";


const ShoppingCart =useContext()

const Context =({children})=>{
    const [state,dispatch] = useReducer(shoppingCartReducer,{
        products:[]
    });
    return <ShoppingCart.Provider>{children}</ShoppingCart.Provider>
}

export default Context;