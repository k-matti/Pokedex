import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsCaughtlistComponent } from './pokemons-caughtlist/pokemons-caughtlist.component';

const routes: Routes = [{ path: '', component: PokemonsCaughtlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaughtlistRoutingModule {}
