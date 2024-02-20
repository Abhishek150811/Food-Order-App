import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
    items: [] , 
    addItem: (item)=>{} , 
    removeItem : (id)=>{}
}) ; 

function cartReducer(state , action){
    if(action.type === 'ADD_ITEM'){
        
    }
    if(action.type === 'REMOVE_ITEM'){

    }
    return state ; 
}
export  function CartContextProvideer({children}){
    useReducer() ; 
    return <CartContext.Provider>
        {children}
    </CartContext.Provider>
}
export default CartContext ; 