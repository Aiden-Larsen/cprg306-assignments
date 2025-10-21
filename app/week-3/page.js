import ItemList from "./item-list";
import PageHeader from "../components/PageHeader";

export default function Page() {
    return (
        <main>
            <PageHeader title="Week-3" description="don't have time"/>
            <h1>Shopping List</h1>
            <ItemList/>
        </main>
    )
}