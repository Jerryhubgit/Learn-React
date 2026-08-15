
export const ContactForm = () => {
    const name = "Benjamin"
    const role = "Developer"
    const yearsOfExperience = 5
    const isAvailable = true;
    return (
        <form className="form" action="">
            <input htmlFor="username" type="text" />
            <br />
            <input htmlFor="email" type="email" />
            <h3>Fullname: { name }</h3>
            <p>Role: { role }</p>
            <p>Experience: { yearsOfExperience }</p>
            <p>Email: { name + "@gmail.com"}</p>
            <p>Available: { isAvailable ? "available for hire" : "preoccupied" }</p>
        </form>
    )
}