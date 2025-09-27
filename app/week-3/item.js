function Item({name, quantity, category}) {
    return (
        <main>
            <ul>
                <li>{name}</li>
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
            </ul>
        </main>
    )
}

export default Item;