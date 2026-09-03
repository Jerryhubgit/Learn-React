import { useReducer } from 'react'

export const ShoppingCartWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const products = [
        { id: 1, name: "React Course", price: 49.99 }, 
        { id: 2, name: "Node.js Course", price: 39.99 }, 
        { id: 3, name: "Javascript Bundle", price: 89.99 }
    ]   

    return <div>
        <h2>Products</h2>
        {products.map((product) => (
            <div key={product.id}>
                <h3>{product.name} - ${product.price}</h3>
                <button style={{
                    borderRadius: "10px", 
                    border: "1px solid hsl(0,0%,30%)"
                }}>Add to cart</button>
            </div>
        ))}
    </div>
}