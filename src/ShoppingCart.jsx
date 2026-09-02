import { useState } from "react"

export const ShoppingCart = () => {
    const [courseQty, setCourseQty] = useState({
        cachingCourse: 0, 
        shardingCourse: 0
    })
    const [coursePrice, setCoursePrice] = useState({
        cachingPrice: 22.45, 
        shardingPrice: 32.95
    })
    const handleCachingCourse = () => {
        setCourseQty({
            ...courseQty, 
            cachingCourse: courseQty.cachingCourse + 1
        })
    }

    const handleShardingCourse = () => {
        setCourseQty({
            ...courseQty, 
            shardingCourse: courseQty.shardingCourse + 1
        })
    }
    const handleClearCart = () => {
        setCourseQty({
            cachingCourse: 0, 
            shardingCourse: 0
        })
    }

    return(
        <div>
            <h1>Shopping Cart</h1>
            <button onClick={handleClearCart}>Clear Cart</button>
            <ProductList name="Caching Course" price={coursePrice.cachingPrice} quantity={courseQty.cachingCourse} onAddToCart={handleCachingCourse} />
            <ProductList name="Sharding Course" price={coursePrice.shardingPrice} quantity={courseQty.shardingCourse} onAddToCart={handleShardingCourse} />
            <CartSummary courseQty={courseQty} coursePrice={coursePrice}/>
        </div>
    )
}

export const ProductList = ({ name, price, quantity, onAddToCart }) => {
    return (
        <div style={{
            border: "2px solid"
        }}>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={onAddToCart}>Add to cart</button>
        </div>
    )
}

export const CartSummary = ({ courseQty, coursePrice}) =>{
    const totalItems = courseQty.cachingCourse + courseQty.shardingCourse
    const totalPrice = coursePrice.cachingPrice* courseQty.cachingCourse + 
                       coursePrice.shardingPrice  * courseQty.shardingCourse
    return(
        <div>
            <h3>Cart Summary</h3>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice}</p>
        </div>
    )
}