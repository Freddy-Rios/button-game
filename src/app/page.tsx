import Image from "next/image";

const data = { Germany: "Berlin", azerbaijan: "Baku" };

function ButtonGame({ data }: { data: Record<string, string> }) {
  return <>hello world? part two</>;
}

export default function Home() {
  return (
    <>
      <ButtonGame data={data} />
    </>
  );
}
