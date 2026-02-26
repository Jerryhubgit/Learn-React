import './list.css'

function List(props){

    const ListItems = props.items

    const newList = ListItems.map(item => <li key={item.id}>{item.name}</li>)
    return(
        <div>
            <h2>{props.name}</h2>
            <ul className="collections">
                {newList}
            </ul>
        </div>
    )
}

export default List;