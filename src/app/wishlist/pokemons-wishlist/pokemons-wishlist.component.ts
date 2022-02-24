import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './pokemons-wishlist.component.html',
  styleUrls: ['./pokemons-wishlist.component.scss'],
})
export class PokemonsWishlistComponent implements OnInit {
  pokemons: Pokemon[] = [];

  ids: number[] = [];

  constructor(
    private wishlistService: WishlistService,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.wishlistService.getWishlist().subscribe((x) => (this.ids = x));

    this.ids.forEach((x) =>
      this.pokemonService
        .getPokemonDetails(x)
        .pipe(
          map(
            (x) =>
              ({
                id: x.id,
                name: x.name,
                avatar: x.sprites.front_default,
              } as Pokemon)
          )
        )
        .subscribe((x) => this.pokemons.push(x))
    );
  }
}
