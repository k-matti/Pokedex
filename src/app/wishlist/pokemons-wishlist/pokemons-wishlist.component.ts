import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, mergeAll, switchMap, takeUntil } from 'rxjs/operators';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './pokemons-wishlist.component.html',
  styleUrls: ['./pokemons-wishlist.component.scss'],
})
export class PokemonsWishlistComponent implements OnInit, OnDestroy {
  destroyed$ = new ReplaySubject<boolean>(1);

  pokemons: Pokemon[] = [];

  constructor(
    private wishlistService: WishlistService,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getPokemonsOnWishlist();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  private getPokemonsOnWishlist(): void {
    this.wishlistService
      .getWishlist()
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
