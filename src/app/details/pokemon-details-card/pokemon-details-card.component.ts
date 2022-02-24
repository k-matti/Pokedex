import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { PokemonDetails } from 'src/app/models/pokemonDetails';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { CaughtService } from 'src/app/shared/services/caught.service';

@Component({
  selector: 'app-pokemon-details-card',
  templateUrl: './pokemon-details-card.component.html',
  styleUrls: ['./pokemon-details-card.component.scss'],
})
export class PokemonDetailsCard implements OnInit {
  destroyed$ = new ReplaySubject<boolean>(1);

  pokemon: PokemonDetails | undefined;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private wishListService: WishlistService,
    private caughtListService: CaughtService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.pokemonService
        .getPokemonDetails(+id)
        .pipe(takeUntil(this.destroyed$))
        .subscribe((x) => (this.pokemon = x));
    }
  }

  addPokemonToWishlist(id: number | undefined) {
    this.wishListService.addToWishlist(id!);
    this.toastr.success('Added to wishlist', 'Success!');
  }

  addPokemonCaughtList(id: number | undefined) {
    this.caughtListService.addToCaughtList(id!);
    this.toastr.success('Added to caughtlist', 'Success!');
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
