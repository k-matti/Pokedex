import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';
import { PokemonDetailsCard } from './pokemon-details-card/pokemon-details-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PokemonDetailsCard],
  exports: [PokemonDetailsCard],
  imports: [CommonModule, DetailsRoutingModule, SharedModule],
})
export class DetailsModule {}
