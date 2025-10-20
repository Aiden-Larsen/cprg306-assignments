import NewItem from "./new-item";

export default function Page() {
    return (
        <main className="rounded pb-7 bg-blue-950">
            <header className="rounded bg-blue-500 pb-3">
                <h1 className="text-3xl font-bold text-gray-800 pl-2">Week-5</h1>
                <p className="text-gray-900 font-bold pl-2">:)</p>
            </header>
            <section className="rounded gap-4 mt-4 max-w-xl mx-auto py-4 bg-blue-500">
                <NewItem/>
            </section>
        </main>
    ) 
}