import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { apiBaseUrl } from '../../../../constants';
import { IEntriesModel } from '../../../model/public-api.model';

@Injectable({
    providedIn: 'root'
})
export class PublicApiService {
    private readonly apiBaseUrl: string;
    constructor(private readonly http: HttpClient) {
        this.apiBaseUrl = apiBaseUrl;
    }

    /**
     * Function to return the list of entries
     * @returns entries: IEntriesModel[]
     */
    public getEntries(): Observable<IEntriesModel[]> {
        const endpoint = `${this.apiBaseUrl}/entries`;
        return this.http.get(endpoint).pipe(map((response: any) => response.entries));
    }
}
