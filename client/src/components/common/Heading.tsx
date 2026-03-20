export default function Heading({
  text,
  jpText,
}: {
  text: string;
  jpText: string;
}) {
  return (
    <div className="text-center mb-4 ">
      <h3 className="text-base" style={{ fontFamily: "var(--font-mochiy)" }}>
        {jpText}
      </h3>
      <h1 className="uppercase text-7xl font-samurai-blast text-red-dark">
        {text}
      </h1>
    </div>
  );
}
