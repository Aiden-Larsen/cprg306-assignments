import NewItem from "./new-item";

export default function Page() {
    return (
        <main className="rounded mb-6 pb-4 bg-blue-800">
            <header className="flex flex-row justify-left rounded bg-blue-500 py-2">
                <section className="flex flex-row rounded p-4 ml-2 gap-4 bg-blue-400">
                    <h1 className="text-3xl font-bold text-gray-900 pl-2">Week-4</h1>
                    <h1 className="text-gray-900 font-bold my-auto">:P</h1>
                </section>
            </header>
            <section className="flex flex-row justify-center gap-4 rounded mt-4 mx-10 py-4 bg-blue-500">
                <NewItem/>
            </section>
        </main>
    ) 
}