import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../shared/services/pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  destroyed$ = new ReplaySubject<boolean>(1);

  public pokemons: Pokemon[] = [];
  searchText: string = '';

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemons()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((x) => (this.pokemons = x));
  }

  onPokemonSelect(id: number) {
    this.router.navigate(['details/', id]);
  }

  onSearch(search: string) {
    this.searchText = search;
  }

  onScrollDown() {
    this.pokemonService
      .getPokemons(this.pokemonService.next)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((x) => (this.pokemons = [...this.pokemons, ...x]));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
