import Image from "next/image";

const data = { Germany: "Berlin", azerbaijan: "Baku" };

function ButtonGame({ data }: { data: Record<string, string> }) {
  // grab data into countries and capitals
  const countries = Object.keys(data);
  const capitals = Object.values(data);

  // combine arrays for options to select randomly
  const options = [...countries, ...capitals];

  return (
    <>
      {options.map((option) => (
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          {option}
        </button>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <>
      <ButtonGame data={data} />
    </>
  );
}
{
  /* <a href="#_" class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Button Text</span>
</a> */
}
