import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { PokemonResults } from '../../interfaces/pokemon';
import { environment } from './../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonResults> {
    return this.http.get<PokemonResults>(`${environment.apiUrlBase}/pokemon`);
  }
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';


  getPokemonById(url: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${url}`)
}


}
