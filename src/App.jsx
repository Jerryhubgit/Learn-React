import { PreviousStateCounter } from "./PreviousStateCounter"
import { BatchingCounter } from "./BatchingCounter"
import { UserProfile } from "./UserProfile"
import { TodoList } from "./TodoList"
import { ShoppingCart } from "./ShoppingCart"
import { CounterWithReducer } from "./CounterWithReducer"
import { ShoppingCartWithReducer } from "./ShoppingCartWithReducer"
import { CounterWithInit } from "./CounterWIthInit"
import { Header } from "./Header"
import { UserContext } from "./UserContext"
import './index.css'

function App(){

    const user = {
        name: "Bruce Wayne", 
        role: "admin", 
        theme: "dark"
    }
    return (
        <>  
            <UserContext value={user}>
                <div>
                    <h1>Dashboard</h1>
                    <Header/>
                </div>
            </UserContext>
            {/* <CounterWithInit /> */}
            {/* <ShoppingCartWithReducer /> */}
            {/* <CounterWithReducer />
            <ShoppingCart />
            <TodoList /> */}

        </>
    )
}

export default App;