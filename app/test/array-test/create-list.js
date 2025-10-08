

export default function CreateList() {
    function createElement(listitem) {
        console.log("variable");
        return (
            <li>{listitem}</li>
        )
    }

    function createArrayElement(listitems) {
        console.log("array");
        for (let i = 0; i < listitems.length; i++) {
            return (
                <li>{listitems[i]}</li>
            )
        }
    }
}