import ResultCard from "@/components/ResultCard";

export default function CurrentResults({
  platelets,
  hb,
  wbcs,
}: {
  platelets: number;
  hb: number;
  wbcs: number;
}) {
  return (
    <div className="flex-grow w-1/3 flex justify-start items-start flex-wrap gap-y-4">
      <div className="flex-grow flex justify-start items-start gap-4">
        <div className="w-1/2 p-2">
          <h2 className="text-5xl font-bold">Current Blood Results</h2>
        </div>
        <ResultCard title="Platelets" result={platelets} classes="w-1/2" />
      </div>
      <div className="flex-grow flex justify-start items-start gap-4">
        <ResultCard title="HB" result={hb} classes="w-1/2" />
        <ResultCard title="WBCs" result={wbcs} classes="w-1/2" />
      </div>
    </div>
  );
}
