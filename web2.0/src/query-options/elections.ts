import { listMonitoredElectionRounds } from "@/services/api/monitored-election-rounds/list.api";
import { queryOptions } from "@tanstack/react-query";




export const monitoredElectionRoundsKeys = {
    all : () => ["election-rounds:monitoring"] as const
};

export const listMonitoredElectionRoundsOptions = () =>
    queryOptions({
      queryKey: monitoredElectionRoundsKeys.all(),
      queryFn: async () => await listMonitoredElectionRounds(),
      refetchOnWindowFocus: false,
    });