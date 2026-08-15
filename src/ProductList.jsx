

export const ProductList = () => {
    const products = [
        {
            product: "Laptop", 
            price: 999
        }, 
        {
            product: "Televison", 
            price: 1245
        }, 
        {
            product: "Tablet", 
            price: 422
        }
    ]

    products.map(({product, price}) => console.log(product, price))
    return (
        <div id="products">
            <h1>Our Products</h1>
            {products.map(item => {
                    return (<div>
                        <h3>Item: {item.product}</h3>
                        <p>Price: ${item.price}</p>
                    </div>)
                })
            }
        </div>
    )   
}