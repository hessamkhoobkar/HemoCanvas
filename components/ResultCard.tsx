export default function ResultCard({
  title,
  result,
  classes,
}: {
  title: string;
  result: number;
  classes: string;
}) {
  return (
    <div className={`bg-white p-2 rounded-xl ${classes}`}>
      <h3 className="py-1">{title}</h3>
      <div className="bg-neutral-100 flex justify-center items-center rounded-xl aspect-[4/3]">
        <span className="text-6xl font-black py-8">{result}</span>
      </div>
    </div>
  );
}
