import { NavigationBar } from  "./NavigationBar"

export const Header = ({ user }) => {

    return ( 
       <div>
            <h2>Header</h2>
            <NavigationBar user={user} />
       </div> 
    )
}