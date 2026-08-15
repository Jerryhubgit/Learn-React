

export const UserInfo = ({name, age, city, email}) => {
   return (
         <div className="userinfo">
            <h3>{name}</h3>
            <p> <strong>Age: </strong>{age}</p>
            <p><strong>City: </strong> {city}</p>
            <p> <strong>Email: </strong> {email}</p>
        </div>
   )
}