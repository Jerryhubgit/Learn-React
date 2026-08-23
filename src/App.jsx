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
import { CustomButton } from "./CustomButton"
import { Contact } from "./Contact"
import { Newsletter } from "./Newsletter"
import { Menu } from "./Menu"
import { Counter } from "./Counter"
import {LoginCard } from "./LoginCard"
import './index.css'

function App(){
    return (
        <>  
            <LoginCard />
            <Counter />
            <Menu />
            {/* <Contact /> */}
            {/* <Newsletter /> */}
            {/* <CustomButton text="reading" /> */}
            {/* <CustomButton text="Markdown" /> */}
            {/* <CustomButton text="Shaving" /> */}
            <Alert />
            <Alert type="error"/>
            <Alert type="success"/>
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