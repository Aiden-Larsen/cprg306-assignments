export default function PageFooter({
    author,
    description,
    bgColor = "bg-blue-400",
}) {
    <footer className={`mt-4 ${bgColor}`}>
        <h3 className="px-2 py-4">Author of Page: {author}</h3>
        <p>{description}</p>
    </footer>
}