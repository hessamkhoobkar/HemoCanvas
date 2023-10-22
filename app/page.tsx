import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Header from "@/components/Header";
import HemoChart from "@/components/HemoChart";
import CurrentResults from "@/components/CurrentResults";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data: results } = await supabase
    .from("results")
    .select("*")
    .order("result_date", { ascending: false });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-36 px-8 bg-neutral-100 text-black font-medium gap-4">
      <Header />
      {results ? (
        <div className="w-full flex justify-start items-start gap-8">
          <HemoChart />
          <CurrentResults
            platelets={results[0].platelets}
            hb={results[0].hb}
            wbcs={results[0].wbcs}
          />
        </div>
      ) : (
        <p>There are no blood resultes to show</p>
      )}

      <p>Table</p>
      {results?.map((result) => (
        <div
          key={result.id}
          className="w-full flex justify-start items-center gap-4"
        >
          <span>{result.result_date}</span>
          <span>{result.wbcs}</span>
          <span>{result.hb}</span>
          <span>{result.platelets}</span>
        </div>
      ))}
    </main>
  );
}
