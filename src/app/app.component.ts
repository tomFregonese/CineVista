import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Discover', url: '/folder/Discover', icon: 'home' },
    { title: 'Movies', url: '/folder/Movies', icon: 'film' },
    { title: 'Series', url: '/folder/Series', icon: 'tv' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Profile', url: '/folder/Profile', icon: 'person-circle' },
    //{ title: 'Settings', url: '/folder/Settings', icon: 'cog' },
  ];
  constructor() {}
}
