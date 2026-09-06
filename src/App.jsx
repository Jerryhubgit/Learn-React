import { PreviousStateCounter } from "./PreviousStateCounter"
import { BatchingCounter } from "./BatchingCounter"
import { UserProfile } from "./UserProfile"
import { TodoList } from "./TodoList"
import { ShoppingCart } from "./ShoppingCart"
import { CounterWithReducer } from "./CounterWithReducer"
import { ShoppingCartWithReducer } from "./ShoppingCartWithReducer"
import { CounterWithInit } from "./CounterWIthInit"
import './index.css'

function App(){
    return (
        <>  
            <CounterWithInit />
            <ShoppingCartWithReducer />
            {/* <CounterWithReducer />
            <ShoppingCart />
            <TodoList /> */}

        </>
    )
}

export default App;