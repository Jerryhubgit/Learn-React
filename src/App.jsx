import { PreviousStateCounter } from "./PreviousStateCounter"
import { BatchingCounter } from "./BatchingCounter"
import { UserProfile } from "./UserProfile"
import { TodoList } from "./TodoList"
import { ShoppingCart } from "./ShoppingCart"
import { CounterWithReducer } from "./CounterWithReducer"
import { ShoppingCartWithReducer } from "./ShoppingCartWithReducer"
import './index.css'

function App(){
    return (
        <>  
            <ShoppingCartWithReducer />
            {/* <CounterWithReducer /> */}
            {/* <ShoppingCart />
            <TodoList />
            <UserProfile />
            <BatchingCounter />
                    */}
        </>
    )
}

export default App;