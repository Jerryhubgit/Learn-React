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
import { UserContextProvider } from "./UserContextProvider"

import { useState } from 'react'

function App(){
    // App -> Header -> NavigationBar -> UserMenu -> Avatar


    return (
        <>  
            <UserContextProvider>
                <div>
                    <h1>App</h1>
                    <Header/>
                </div>
            </UserContextProvider>
           
            {/* <CounterWithInit /> */}
            {/* <ShoppingCartWithReducer /> */}
            {/* <CounterWithReducer />
            <ShoppingCart />
            <TodoList /> */}

        </>
    )
}

export default App;