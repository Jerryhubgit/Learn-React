import { Avatar } from './Avatar'

export const UserMenu = ({ user }) => {

    return (
        <div>
            <h3>User Menu</h3>
            <Avatar user={user} /> 
        </div>
    )
}