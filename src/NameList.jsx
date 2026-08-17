
export const NameList = () => {
    const names = ["Bruce", "Benson", "james"]
    const nameList = names.map((name, index) => <h3 key={index}>{name}</h3>)

    return(
        <div>
            { nameList }
        </div>
    )
}