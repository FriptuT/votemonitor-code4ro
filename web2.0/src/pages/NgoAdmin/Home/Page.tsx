import { listMonitoredElectionRoundsOptions } from "@/query-options/elections";
import type { ElectionRound } from "@/types/election-round-model";
import { useQuery } from "@tanstack/react-query";

function Page() {
  const { data } = useQuery(listMonitoredElectionRoundsOptions());

  return (
    <>
      <p>
        <b>All ElectionRounds</b>
      </p>
      <br />
      <ul>
        {data?.map((round: ElectionRound, index: number) => (
          <li key={`${round.id}-${index}`}>{round.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Page;
