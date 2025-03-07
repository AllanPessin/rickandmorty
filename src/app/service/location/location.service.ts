import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

export interface ApiResponse<T> {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: T[];
}

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Array<string>;
    url: string;
    created: string;
}

@Injectable({
    providedIn: 'root',
})
export class LocationService {
    private url: string = environment.API_URL;

    constructor(private http: HttpClient) {}

    getLocation(): Observable<ApiResponse<Location>> {
        return this.http.get<ApiResponse<Location>>(`${this.url}/location`);
    }

    getLocationById(id: number): Observable<Location> {
        return this.http.get<Location>(`${this.url}/location/${id}`);
    }
}
