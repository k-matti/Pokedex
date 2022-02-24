import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaughtService } from 'src/app/shared/services/caught.service';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

import { PokemonsCaughtlistComponent } from './pokemons-caughtlist.component';

describe('CaughtlistComponent', () => {
  let component: PokemonsCaughtlistComponent;
  let fixture: ComponentFixture<PokemonsCaughtlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsCaughtlistComponent ],
      imports: [HttpClientTestingModule],
      providers: [CaughtService, PokemonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsCaughtlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
