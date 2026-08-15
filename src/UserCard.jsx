import { UserInfo } from "./UserInfo"


export const UserCard = ( { name, age, city, email } ) => {
    return (
        <div className="usercard">
            <h1>User Details</h1>
            <UserInfo name={name} age={age} city={city} email={email}  />
        </div>
    )
}