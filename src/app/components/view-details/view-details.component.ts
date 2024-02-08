import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent implements OnInit {
  @Input() selectedMedia: any;

  constructor(
    private modalController: ModalController
      ) {}

  ngOnInit() {
    console.log('Media Details:', this.selectedMedia);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  async shareMedia() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: this.selectedMedia?.title || this.selectedMedia?.name,
          text: `Check out this ${this.selectedMedia?.media_type}: "${this.selectedMedia?.title || this.selectedMedia?.name}"`,
          url: `https://www.themoviedb.org/${this.selectedMedia?.media_type}/${this.selectedMedia?.id}`,
        });
        console.log('Media shared successfully');
      } catch (error) {
        console.error('Error sharing media', error);
      }
    } else {
      console.log('Web Share API not supported');
    }
  }



}
