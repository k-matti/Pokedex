import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { CaughtService } from 'src/app/shared/services/caught.service';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { PokemonDetailsCard } from './pokemon-details-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetailsComponent', () => {
  let component: PokemonDetailsCard;
  let fixture: ComponentFixture<PokemonDetailsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailsCard ],
      imports: [HttpClientTestingModule, RouterTestingModule,ToastrModule.forRoot()],
      providers: [ PokemonService, CaughtService, WishlistService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
