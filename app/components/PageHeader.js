import PageSelect from "./PageTransport";

export default function SectionHeader({
  title,
  description,
  bgColor = "bg-blue-500",
}) {
  return (
    // <header className={`mt-8 mb-4 p-4 ${bgColor}`}>
    //   <h2 className="text-2xl lg:text-4xl font-semibold">{title}</h2>
    //   <p className="text-lg">{description}</p>
    // </header>
    <header className={`flex flex-row rounded max-w-full pb-4 ${bgColor}`}>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 pl-2">{title}</h1>
        <p className="text-gray-900 font-bold pl-2">{description}</p>
      </div>
      <div className="self-end max-w-full text-black ml-auto mr-4">
        <PageSelect/>
      </div>
    </header>
  );
}