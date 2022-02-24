import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsWishlistComponent } from './pokemons-wishlist/pokemons-wishlist.component';

const routes: Routes = [{ path: '', component: PokemonsWishlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishlistRoutingModule {}
