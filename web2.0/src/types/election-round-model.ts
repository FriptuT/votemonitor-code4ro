

export interface listElectionRounds{
    electionRounds: ElectionRound[];
}

export interface ElectionRound{
    id: string;
    countryId: string;
    countryIso2: string;
    countryIso3: string;
    countryNumericCode: string;
    countryName: string;
    countryFullName: string;
    title: string;
    englishTitle: string;
    startDate: string               //  Date
    status: ElectionRoundStatus;
    createdOn: string;              // Date
    lastModifiedOn: string          // Date
}

export enum ElectionRoundStatus {
    NotStarted = "NotStarted",
    Started = "Started",
    Archived = "Archived",
}