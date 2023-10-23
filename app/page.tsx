import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Header from "@/components/Header";
import HemoChart from "@/components/HemoChart";
import CurrentResults from "@/components/CurrentResults";
import HemoTable from "@/components/HemoTable";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data: results } = await supabase
    .from("results")
    .select("*")
    .order("result_date", { ascending: false });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-36 px-8  font-medium gap-4 w-full max-w-screen-2xl mx-auto">
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
      {results ? <HemoTable results={results} /> : ""}
    </main>
  );
}
