import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Discover', url: '/discover', icon: 'home' },
    { title: 'Movies', url: '/movies', icon: 'film' },
    { title: 'Series', url: '/series', icon: 'tv' },
    { title: 'Favorites', url: '/favorites', icon: 'heart' },
    { title: 'Profile', url: '/profile', icon: 'person-circle' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Check if the application needs to navigate to '/discover'
    if (localStorage.getItem('navigateToDiscover') === 'true') {
      localStorage.removeItem('navigateToDiscover'); // Clear the flag
      this.router.navigate(['/discover']);
    }
  }
}
