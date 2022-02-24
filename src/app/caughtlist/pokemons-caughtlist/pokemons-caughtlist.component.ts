import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Pokemon } from 'src/app/models/pokemon';
import { CaughtService } from 'src/app/shared/services/caught.service';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-caughtlist',
  templateUrl: './pokemons-caughtlist.component.html',
  styleUrls: ['./pokemons-caughtlist.component.scss'],
})
export class PokemonsCaughtlistComponent implements OnInit {
  pokemons: Pokemon[] = [];

  ids: number[] = [];

  constructor(
    private caughtListService: CaughtService,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.caughtListService.getCaughtList().subscribe((x) => (this.ids = x));

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
