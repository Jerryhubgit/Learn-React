
export const Card = ({name = "Guest", alias = "Superhero"}) => { 


    console.log(name)
    return(
        <h1>welcome {name} aka {alias} </h1>
    )
}