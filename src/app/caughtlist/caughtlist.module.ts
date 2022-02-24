import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaughtlistRoutingModule } from './caughtlist-routing.module';
import { PokemonsCaughtlistComponent } from './pokemons-caughtlist/pokemons-caughtlist.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PokemonsCaughtlistComponent],
  imports: [CommonModule, CaughtlistRoutingModule, SharedModule],
})
export class CaughtlistModule {}
