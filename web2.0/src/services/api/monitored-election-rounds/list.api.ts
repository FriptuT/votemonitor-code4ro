import API from "@/services/api"
import type { ElectionRound, listElectionRounds } from "@/types/election-round-model";


export const listMonitoredElectionRounds = () : Promise<ElectionRound[]> => {
    return API.get<listElectionRounds>(
        `election-rounds:monitoring`
    ).then((res) => {
        console.log("API Response: ", res.data);
        return res.data.electionRounds;
    });
};