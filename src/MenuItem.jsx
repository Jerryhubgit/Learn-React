
export const MenuItem = ({name, price, onOrder}) => {
   
    return(
        <div>
            <span style={{margin: "30px"}}>{name} - ${price}</span>
            <button onClick={() => onOrder(name, price)} style={{padding: "5px 10px"}}>order</button>
        </div>
    )
}