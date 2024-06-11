import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }


  getAllCharacters(): Observable<{ results: Character[] }> {
    return this.http.get<{ results: Character[] }>(`${this.apiUrl}/character`);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }
}
