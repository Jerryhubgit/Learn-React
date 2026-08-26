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
import {LoginCard } from "./LoginCard"
import { Counter, LoginBtn } from "./Counter"
import { UserDashboard } from "./UserDashboard"
import { SimpleCounter } from "./SimpleCounter"
import './index.css'

function App(){
    return (
        <>  
            <SimpleCounter />
            {/* <UserDashboard isPremium={true} /> */}
            {/* <UserDashboard isPremium={false} /> */}
            <LoginBtn />
            <Counter />
            <Counter />
            <LoginCard />
            <Menu />
            {/* <Contact /> */}
            {/* <Newsletter /> */}
            {/* <CustomButton text="reading" /> */}
            {/* <CustomButton text="Markdown" /> */}
            {/* <CustomButton text="Shaving" /> */}
            <Alert />
            <Alert type="error"/>
            <Alert type="success"/>          
        </>
    )
}

export default App;