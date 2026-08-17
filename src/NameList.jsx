
export const NameList = () => {
    const names = ["James","Philip","Felix"]
    const namesList = names.map((name, index) => { return <h3 key={index}>{name}</h3>})

    return (
        <div>
            { namesList }
        </div>
    )
}