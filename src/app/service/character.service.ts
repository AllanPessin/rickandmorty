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

  getCharacter(): Observable<ApiResponse<Character>> {
    return this.http.get<ApiResponse<Character>>(`${this.url}/character`);
  }

  getCharacterByID(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.url}/character/${id}`);
  }

  searchCharacter(name: string): Observable<ApiResponse<Character>> {
    return this.http.get<ApiResponse<Character>>(
      `${this.url}/character/?name=${name}`,
    );
  }

  getCharactersByPage(
    page: number,
    pageSize: number,
  ): Observable<ApiResponse<Character>> {
    return this.http.get<ApiResponse<Character>>(
      `${this.url}/character/?page=${page}&limti=${pageSize}`,
    );
  }
}
