import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output()
  searchEmmit = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSearch(search: any) {
    this.searchEmmit.emit(search.value);
  }
}
