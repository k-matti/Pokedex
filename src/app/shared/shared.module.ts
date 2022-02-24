import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [SearchFilterPipe, PokemonCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    InfiniteScrollModule,
  ],
  exports: [
    MaterialModule,
    InfiniteScrollModule,
    SearchFilterPipe,
    PokemonCardComponent,
  ]
})
export class SharedModule {}
