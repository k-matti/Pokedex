import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, mergeAll, switchMap, takeUntil } from 'rxjs/operators';
import { Pokemon } from 'src/app/models/pokemon';
import { CaughtService } from 'src/app/shared/services/caught.service';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-caughtlist',
  templateUrl: './pokemons-caughtlist.component.html',
  styleUrls: ['./pokemons-caughtlist.component.scss'],
})
export class PokemonsCaughtlistComponent implements OnInit, OnDestroy {
  destroyed$ = new ReplaySubject<boolean>(1);

  pokemons: Pokemon[] = [];

  constructor(
    private caughtListService: CaughtService,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getPokemonsOnCaughtList();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  private getPokemonsOnCaughtList(): void {
    this.caughtListService
      .getCaughtList()
      .pipe(
        switchMap((ids) =>
          ids.map((id) => this.pokemonService.getPokemonDetails(id))
        ),
        mergeAll(),
        map(
          (x) =>
            ({
              id: x.id,
              name: x.name,
              avatar: x.sprites.front_default,
            } as Pokemon)
        ),
        takeUntil(this.destroyed$)
      )
      .subscribe((x) => {
        this.pokemons.push(x);
      });
  }
}
