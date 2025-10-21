import NewItem from "./new-item";
import PageHeader from "../components/PageHeader";

export default function Page() {
    return (
        <main className="rounded pb-7 bg-blue-950">
            <PageHeader title="Week-5" description="don't have time"/>
            <section className="rounded gap-4 mt-4 max-w-xl mx-auto py-4 bg-blue-500">
                <NewItem/>
            </section>
        </main>
    ) 
}