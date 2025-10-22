export default function Item({name, quantity, category}) {
    return (
        <div className="rounded border-2 border-white bg-amber-400 mx-6 my-2">
            <ul className="p-2 mx-2">
                <li>{name}</li>
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
            </ul>
        </div>
    )
}