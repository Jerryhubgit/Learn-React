import { ContactForm } from "./Form"
import { Card } from './card'
import { Product } from "./product"
import { Greeting } from "./Greeting"
import { UserCard } from "./UserCard"
import { CardWrapper } from "./CardWrapper"
import { ProductList } from "./ProductList"
import { UserDetails } from "./UserDetails"
import { NameList } from "./NameList"
import { Alert } from "./Alert"

import { SubscribeBtn, DeleteBtn } from "./Button"
import './index.css'

function App(){
    return (
        <>  
            <SubscribeBtn />
            <DeleteBtn />
            <Alert type="error">
                <h2>Payment Sucessful</h2>
            </Alert>
            <Alert type="success">
                <h2>Something went wrong, try again</h2>
            </Alert>
            <UserDetails name="James Anoghua" isOnline={true} hideOffline={true} isPremium={true} isNewUser={false} role="admin" />
            <UserDetails name="Samuel" isOnline={false} hideOffline={false} isPremium={false} isNewUser={true} role="moderator"/>
            <UserDetails name="Henry" isOnline={true} isPremium={true} isNewUser={true} role="vip"/>
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