import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsCard } from './pokemon-details-card/pokemon-details-card.component';

const routes: Routes = [{ path: '', component: PokemonDetailsCard }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}
