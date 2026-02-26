
import List from './list.jsx'
import Button from './button.jsx'

function App(){

    const fruits = [{id: 0, name: 'Guava'}, 
                    {id: 1, name: 'Kiwi'}, 
                    {id: 2, name: 'Mango'}, 
                    {id: 3, name: 'Cherry'}
    ]

    const names = [ {id: 0, name: 'benjamin'}, 
                    {id: 1, name: 'Jerry'}, 
                    {id: 2, name: 'jim'}, 
                    {id: 3, name: 'martins'}, 
                    {id: 4, name: 'florence'}, 
                    {id: 5, name: 'Ejike'}
    ]
    
    return (
        <>
            <List items={fruits} name="Edible fruits"></List>
            <List items={names} name="Selected Persons"></List>
            <Button></Button>
        </>
    )
}


export default App