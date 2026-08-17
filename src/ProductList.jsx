
export const ProductList = () => {
    const products = [
        {
            id: 1, 
            name: "laptop", 
            price: 872
        }, 
        {
            id: 2, 
            name: "Generator", 
            price: 686
        }, 
        {
            id: 3, 
            name: "Phone", 
            price: 1222
        }
    ]

    const productsList = products.map(({id, name, price}) => {
        return (
            <div key={id}>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
        )
    })
    return(
        <div>
            <h2>Product List</h2>
            { productsList }
        </div>   
    )
}