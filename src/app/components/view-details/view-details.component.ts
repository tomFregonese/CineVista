import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent implements OnInit {
  @Input() selectedMedia: any;

  constructor(private modalController: ModalController) {} // Injectez le ModalController dans le constructeur

  ngOnInit() {
    console.log('Media Details:', this.selectedMedia);
  }

  trimLeadingSpace(str: string): string {
    return str ? str.replace(/^\s+/g, '') : '';
  }

  addToFavorites() {
    // Code pour gérer l'ajout aux favoris
    // Vous pouvez implémenter la logique d'ajout aux favoris ici
  }

  async closeDetails() {
    // Utilisez le ModalController pour fermer le modal
    await this.modalController.dismiss();
  }
  // ... autres méthodes
}
