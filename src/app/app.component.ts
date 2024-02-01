import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {StorageService} from './services/storage.service';
import {Observable} from 'rxjs';

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

  username!: string ;
  oUsername! : Observable<string>;

  constructor(private router: Router, private storageService: StorageService) {
    //this.storageService.currentUsername.subscribe(username => this.username = username);
    this.oUsername = this.storageService.currentUsername;
  }


  ngOnInit() {
    this.storageService.currentUsername.subscribe(username => this.username = username);

    if (localStorage.getItem('navigateToDiscover') === 'true') {
      localStorage.removeItem('navigateToDiscover'); // Clear the flag
      this.router.navigate(['/discover']);
    }
  }

}
