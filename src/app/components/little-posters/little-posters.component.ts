import {Component, Input} from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-little-posters',
  templateUrl: './little-posters.component.html',
  styleUrls: ['./little-posters.component.scss'],
})
export class LittlePostersComponent {

  @Input() public medias!: any[];

  constructor(private _tmdbService: TmdbService) {
  }

}