import NewItem from "./new-item";
import PageHeader from "../components/PageHeader";

export default function Page() {
    return (
        <main className="rounded mb-6 pb-4 bg-blue-800">
            <PageHeader title="Week-4" description="don't have time"/>
            <section className="flex flex-row justify-center gap-4 rounded mt-4 mx-10 py-4 bg-blue-500">
                <NewItem/>
            </section>
        </main>
    ) 
}