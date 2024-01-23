import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  async loadingRestart() {
    const loading = await this.loadingCtrl.create({
      message: 'Redémarrage dans 3 secondes...',
      duration: 3000,
    });

    await loading.present();

    loading.onDidDismiss().then(() => {
      // Définir un paramètre dans le stockage local avant de recharger
      localStorage.setItem('navigateToDiscover', 'true');
      // Recharger l'application
      window.location.reload();
    });
  }
}
