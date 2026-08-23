import { MenuItem } from "./MenuItem"
export const Menu = () => {
     const handleOrder = (itemName, itemPrice) => {
        console.log(`You bought ${itemName} for $${itemPrice}`)
    }
    return (
        <div>
            <h2>Menu</h2>
            <MenuItem name = "Pizza" price={23.22} onOrder={handleOrder}/>
            <MenuItem name = "Spring rolls" price={45.20} onOrder={handleOrder}/>
            <MenuItem name = "Turkey" price={123.22} onOrder={handleOrder}/>
        </div>
    )
}