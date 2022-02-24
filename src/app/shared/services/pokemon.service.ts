import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonDetails } from 'src/app/models/pokemonDetails';
import { getPokemonId, getPokemonAvatar } from 'src/app/helpers/misc';
import { ApiResponse } from 'src/app/models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  next = '';
  previous = '';

  constructor(private http: HttpClient) {}

  getPokemons(url: string = this.baseUrl + '?limit=21'): Observable<Pokemon[]> {
    return this.http.get<ApiResponse>(url).pipe(
      map((response: ApiResponse) => {
        this.next = response.next;
        this.previous = response.previous;
        return response.results;
      }),
      map((pokemons) =>
        pokemons.map((pokemon: Pokemon) => {
          (pokemon.id = getPokemonId(pokemon.url)),
            (pokemon.avatar = getPokemonAvatar(pokemon.id));
          return pokemon;
        })
      ),
      catchError(this.handleError)
    );
  }

  getPokemonDetails(id: number): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error(`An error happend ${error.error.message}`);
    } else {
      console.error(`Status code ${error.status}`);
    }
    return throwError('Please try again later');
  }
}
