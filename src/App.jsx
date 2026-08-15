import { ContactForm } from "./Form"
import { Card } from './card'
import { Product } from "./product"
import { Greeting } from "./Greeting"
import { UserCard } from "./UserCard"
import { CardWrapper } from "./CardWrapper"
import { ProductList } from "./ProductList"
import './index.css'

function App(){
    return (
        <>
            <ProductList />
            <CardWrapper title="Nesting Items inside props" >
                <p>Designing files </p>
                <button>inside props</button>
            </CardWrapper>
            {/* <UserCard name="ben" age={34} city="Bangladesh" email="johngladesh_123@gmail.com" /> */}
            {/* <Greeting message="catching up? " name="john" /> */}
            {/* <Greeting message={0} name="john" /> */}
            {/* <h1>Welcome to Embeded Systems</h1> */}
            {/* <Form /> */}
            <ContactForm />
            {/* <Card name="Batman" alias="bruce" /> */}
            {/* <Card name="Superman"  alias="clark"/> */}
            {/* <Card name="Hulk" alias="arrow"/> */}


            {/* <Product title="House hold items" price={20} inStock={false} categories="cutleries"/> */}
            {/* <Product title="Programming books" price={45.51} inStock={true} categories="Embeded systems"/> */}
            
        </>
    )
}

export default App;