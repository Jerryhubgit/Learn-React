export const Product = ({title="Title", price=0, inStock=false, categories="default"}) => {

    return(
        <div id="product">
            <h3>Title: {title}</h3>
            <p>Price: ${price}</p>
            <p>InStock: {inStock ? "Yes" : "No"}</p>
            <p>Categories: {categories}</p>
        </div>
    )
}