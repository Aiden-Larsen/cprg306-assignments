// import PageHeader from "@app/components/PageHeader";

const greet = (name) => {
    return `Hello ${name}!!`;
}

const pageHeader = {
    title: "Arrow Function Test",
    description: "just me testing arrow functions :3",
}

export default function Page() {
    return (
        <main>
            <PageHeader {...pageHeader}/>
        </main>
    )
}
