import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input()
  pokemon!: Pokemon;
}
