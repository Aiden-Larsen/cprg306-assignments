import ItemList from "./item-list.js";
import PageHeader from "../components/PageHeader.js";

export default function Page() {
    return (
        <main className="bg-blue-950 pb-4">
            <PageHeader title="Week-6" description="^^"/>
            <section className="rounded bg-blue-500 max-w-1/2 mx-auto pb-3">
                <h1 className="text-2xl font-bold text-gray-900 mt-4 p-2">Shopping List</h1>
                <ItemList/>
            </section>
        </main>
    )
}