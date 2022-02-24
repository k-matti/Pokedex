import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { PokemonsWishlistComponent } from './pokemons-wishlist/pokemons-wishlist.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PokemonsWishlistComponent],
  imports: [CommonModule, WishlistRoutingModule, SharedModule],
})
export class WishlistModule {}
