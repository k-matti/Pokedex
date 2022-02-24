import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {
  transform(list: Pokemon[], filterText: string): Pokemon[] {
    return list
      ? list.filter((item) => item.name.toLowerCase().includes(filterText))
      : [];
  }
}
