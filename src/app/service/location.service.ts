import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    nam: string;
    typ: string;
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
}
