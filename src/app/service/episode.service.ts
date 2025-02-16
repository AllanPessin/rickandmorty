import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

export interface ApiResponse<T> {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: T[];
}

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: Array<string>;
    url: string;
    created: string;
}

@Injectable({
    providedIn: 'root',
})
export class EpisodeService {
    private url: string = environment.API_URL;

    constructor(private http: HttpClient) {}

    getEpisode(): Observable<ApiResponse<Episode>> {
        return this.http.get<ApiResponse<Episode>>(`${this.url}/episode`);
    }

    getEpisodeById(id: number): Observable<ApiResponse<Episode>> {
        return this.http.get<ApiResponse<Episode>>(`${this.url}/episode/${id}`);
    }
}
