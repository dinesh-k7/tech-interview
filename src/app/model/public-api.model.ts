export interface IEntriesModel {
    API: string;
    Description: string;
    Auth: string;
    HTTPS: string;
    Cors: string;
    Link: string;
    Category: string;
}

export interface IPublicApiModel {
    count?: string;
    entries: IEntriesModel[];
}
