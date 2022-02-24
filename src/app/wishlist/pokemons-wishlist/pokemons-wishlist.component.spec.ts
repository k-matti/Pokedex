import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { PokemonsWishlistComponent } from './pokemons-wishlist.component';


describe('WishlistComponent', () => {
  let component: PokemonsWishlistComponent;
  let fixture: ComponentFixture<PokemonsWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsWishlistComponent ],
      imports: [HttpClientTestingModule],
      providers: [WishlistService, PokemonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
