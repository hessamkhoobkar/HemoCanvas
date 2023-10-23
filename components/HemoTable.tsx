interface Result {
  id: string;
  result_date: string;
  wbcs: number;
  hb: number;
  platelets: number;
  created_at: string;
}

export default function HemoTable({ results }: { results: Result[] }) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 mt-36">
      <div className="w-full flex justify-start items-center gap-4">
        <span className="bg-neutral-950 text-white rounded-full p-4 w-1/4">
          Result date
        </span>
        <span className="bg-neutral-950 text-white rounded-full p-4 w-1/4">
          WBCs
        </span>
        <span className="bg-neutral-950 text-white rounded-full p-4 w-1/4">
          Hb
        </span>
        <span className="bg-neutral-950 text-white rounded-full p-4 w-1/4">
          Platelets
        </span>
      </div>
      {results?.map((result) => (
        <div
          key={result.id}
          className="w-full flex justify-start items-center gap-4"
        >
          <span className="bg-white rounded-full p-4 w-1/4">
            {result.result_date}
          </span>
          <span className="bg-white rounded-full p-4 w-1/4">{result.wbcs}</span>
          <span className="bg-white rounded-full p-4 w-1/4">{result.hb}</span>
          <span className="bg-white rounded-full p-4 w-1/4">
            {result.platelets}
          </span>
        </div>
      ))}
    </div>
  );
}
