import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
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

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: Array<String>;
    url: string;
    created: string;
}

@Injectable({
    providedIn: 'root',
})
export class CharacterService {
    private url: string = environment.API_URL;

    constructor(private http: HttpClient) {}

    getCharacters(
        id?: number,
        name?: string,
        page?: number,
        status?: string,
        species?: string,
        type?: string,
        gender?: string
    ): Observable<ApiResponse<Character>> {
        let params = new URLSearchParams();
        if (id) params.append('id', id.toString());
        if (name) params.append('name', name);
        if (page) params.append('page', page.toString());
        if (status) params.append('status', status);
        if (species) params.append('species', species);
        if (type) params.append('type', type);
        if (gender) params.append('gender', gender);

        return this.http.get<ApiResponse<Character>>(`${this.url}/character/?${params}`);
    }

    getCharacterById(id: number): Observable<Character> {
        return this.http.get<Character>(`${this.url}/character/${id}`);
    }
}
