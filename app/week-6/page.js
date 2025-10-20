import ItemList from "./item-list.js";
import Items from "./item.js"
import SectionHeader from "../components/PageHeader.js";

export default function Page() {
    return (
        <main className="bg-blue-950 pb-4">
            <SectionHeader title="Week-6" description="^^"/>
            <section className="rounded border-3 border-white max-w-1/2 mx-auto">
                <ItemList/>
                <h1 className="text-2xl font-bold mx-4">Shopping List</h1>
                <div>
                    <Items/>
                </div>
            </section>
            
        </main>
    )
}