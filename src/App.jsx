import { PreviousStateCounter } from "./PreviousStateCounter"
import { BatchingCounter } from "./BatchingCounter"
import { UserProfile } from "./UserProfile"
import { TodoList } from "./TodoList"
import { ShoppingCart } from "./ShoppingCart"
import './index.css'

function App(){
    return (
        <>  
            <ShoppingCart />
            <TodoList />
            <UserProfile />
            <BatchingCounter />
                   
        </>
    )
}

export default App;