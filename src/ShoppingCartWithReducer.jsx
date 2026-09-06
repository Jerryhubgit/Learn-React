import { act, useReducer } from "react"

let initialState = {
    items: [], 
    totalItems: 0, 
    totalPrice: 0
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_ITEM": 
            // check if item already exist 
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id)

            let updatedItems = [...state.items]
            if(existingItemIndex >= 0){
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex], 
                    quantity: updatedItems[existingItemIndex].quantity + 1
                }
            }else{
                updatedItems = [
                    ...state.items, 
                    {
                        ...action.payload, quantity: 1
                    }
                ]
            }

            return {
                items: updatedItems, 
                totalItems: updatedItems.reduce((total, item) => total + item.quantity ,0),
                totalPrice: updatedItems.reduce((total, item) => total + item.price * item.quantity ,0)
            }

            case "REMOVE_ITEM": 
                // return filterd array 

                const filteredItems = state.items.filter(item => item.id !== action.payload.id)
                return {
                    items: filteredItems, 
                    totalItems: filteredItems.reduce((total, item) => total + item.quantity, 0), 
                    totalPrice: filteredItems.reduce((total, item) => total + item.price * item.quantity, 0)
                }

            case "UPDATE_QUANTITY": 
                if(action.payload.quantity === 0){
                    return reducer(state, {
                        type: "REMOVE_ITEM", 
                        payload: { id: action.payload.id }
                    })
                }

                const updatedQuantityItems = state.items.map(item => {
                    if (item.id === action.payload.id){
                        return { ...item, quantity: action.payload.quantity }
                    }else return item 
                })

                return {
                    items: updatedQuantityItems, 
                    totalItems: updatedQuantityItems.reduce((total, item) => total + item.quantity ,0), 
                    totalPrice: updatedQuantityItems.reduce((total, item) => total + item.price * item.quantity, 0)
                }

            case "CLEAR_CART": 
                return  initialState
    }
}
export const ShoppingCartWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const products = [
        { id: 1, name: "Apple Smart Watch", price: 50.25 }, 
        { id: 2, name: "Azuz Laptop", price: 212.99 }, 
        { id: 3, name: "Wireless Charger", price: 32.18 }
    ]

    return (
        <div className="shopping-cart">
            <h2>Products</h2>
           { products.map(product => (
                 <div key={product.id}>
                    <h3>{product.name} - ${product.price}</h3>
                    <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>Add to Cart</button>
                </div>
           ))}

           <div>
                <h2>Shopping Cart</h2>
                {
                    state.totalItems === 0 ? 
                        (<p> Cart is empty </p> ) : 
                        state.items.map(item => 
                            (
                                <div key={item.id}>
                                    <p>{item.name} - {item.price} x {item.quantity} </p>
                                    <button
                                        onClick={() => 
                                            dispatch({
                                                type: "UPDATE_QUANTITY", 
                                                payload: { id: item.id, quantity: item.quantity - 1}
                                            })
                                        }
                                    >-</button>
                                    <button
                                        onClick={() => 
                                            dispatch({
                                                type: "UPDATE_QUANTITY", 
                                                payload: { id: item.id, quantity: item.quantity + 1}
                                            })
                                        }
                                    >+</button>
                                    <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: { id: item.id, quantity: item.quantity } })}>Remove item</button>
                                </div>
                            )
                        )
                }
                <h3>Total Items: { state.totalItems }</h3>
                <h3>Total Price: { state.totalPrice.toFixed(2) }</h3>
                <button onClick={() => 
                    dispatch({
                        type: "CLEAR_CART", 
                    })
                }>Clear Cart</button>
           </div>
        </div>
    )
}