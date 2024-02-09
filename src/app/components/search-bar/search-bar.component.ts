import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {

  isSearchVisible = false;

  toggleSearch(): void {
    this.isSearchVisible = !this.isSearchVisible;
  }

}
