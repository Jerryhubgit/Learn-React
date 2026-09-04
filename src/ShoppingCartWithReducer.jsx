import { useReducer } from "react"

const initialState = {
    items: [], 
    totalAmount: 0, 
    totalItems: 0
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_ITEM": {
            // we click the button it retieves the id and compares it to see which matches it in the items array
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id)

            let updatedItems;
            if(existingItemIndex >= 0){
                updatedItems = [...state.items]
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex], 
                    quantity: updatedItems[existingItemIndex].quantity + 1
                }
            }else{
                updatedItems = [
                    ...state.items,
                    { ...action.payload, quantity: 1 }
                ]
            }

            return {
                items: updatedItems, 
                totalAmount: updatedItems.reduce((total, item) =>  total + item.price * item.quantity,0),
                totalItems: updatedItems.reduce((total, item) =>  total + item.quantity,0)
            }
        }
        case "REMOVE_ITEM":
            const filteredItems = state.items.filter(item => item.id !== action.payload.id)


            return {
                ...state, 
                items: filteredItems, 
                totalAmount: filteredItems.reduce((total, item) => total + item.price * item.quantity),
                totalItems: filteredItems.reduce((total, item) => total + item.quantity)
            }
              
        default: 
            return state
    }
}

export const ShoppingCartWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const products = [
        { id: 1, name: "Comptia A+", price: 300.50 }, 
        { id: 2, name: "Amazon Cloud cert", price: 1000.00 }, 
        { id: 3, name: "Kubernetes associated", price: 76.25 }
    ]

    return(
        <div className="shopping-cart">
            <h1>Products</h1>
            { products.map(product => (
                <div key={product.id}> 
                    <h3>{product.name} - ${product.price}</h3>
                    <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>Add to cart</button>
                </div>
            ))}

            <div>
                <h2>Shopping Cart</h2>
                <div>
                { 
                    state.totalItems === 0 ? 
                        <p>Cart is empty</p>  : 
                        state.items.map(item => (
                            <div>
                                <p>{item.name} - {item.price} x {item.quantity}</p>
                                <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: { ...item }})}>Remove item</button>
                            </div>
                        ))
                        
                }
                </div>
                <h3>Total Items: {state.totalItems} </h3>
                <h3>Total amount: ${state.totalAmount.toFixed(2)} </h3>
                
            </div>
        </div>
    )
}
