import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Discover', url: '/discover', icon: 'home' },
    { title: 'Movies', url: '/movies', icon: 'film' },
    { title: 'Series', url: '/series', icon: 'tv' },
    { title: 'Favorites', url: '/favorites', icon: 'heart' },
    { title: 'Profile', url: '/profile', icon: 'person-circle' }
];

  constructor() {}
}
