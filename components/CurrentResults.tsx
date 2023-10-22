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
    <div className="flex-grow w-1/3 flex justify-start items-start flex-wrap gap-4">
      <div className="w-5/12 p-4">
        <h2 className="text-5xl font-bold">Current Blood Results</h2>
      </div>
      <div className="bg-white w-5/12 p-4 rounded-xl">
        <h3>Platelets</h3>
        <div className="bg-neutral-100 flex justify-center items-center rounded-xl">
          <span className="text-4xl font-bold py-8">{platelets}</span>
        </div>
      </div>
      <div className="bg-white w-5/12 p-4 rounded-xl">
        <h3>Hb</h3>
        <div className="bg-neutral-100 flex justify-center items-center rounded-xl">
          <span className="text-4xl font-bold py-8">{hb}</span>
        </div>
      </div>
      <div className="bg-white w-5/12 p-4 rounded-xl">
        <h3>WBCs</h3>
        <div className="bg-neutral-100 flex justify-center items-center rounded-xl">
          <span className="text-4xl font-bold py-8">{wbcs}</span>
        </div>
      </div>
    </div>
  );
}
