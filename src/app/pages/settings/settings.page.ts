import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  // Propriété pour stocker le thème actuel
  theme: string = 'light'; // Valeur par défaut pour le thème

  constructor(
    private loadingCtrl: LoadingController,
    private router: Router
  ) {
    // Chargez le thème préféré de l'utilisateur au démarrage
    this.loadPreferredTheme();
  }

  // Méthode pour charger le thème préféré de l'utilisateur
  loadPreferredTheme() {
    const savedTheme = localStorage.getItem('preferredTheme') || 'light'; // 'light' est la valeur par défaut
    this.theme = savedTheme;
    // Appliquez le thème ici, si nécessaire
  }

  // Méthode pour gérer le changement de thème
  onThemeChange(selectedTheme: string) {
    this.theme = selectedTheme;
    this.savePreferredTheme(selectedTheme);
    // Appliquez le thème ici, si nécessaire
  }

  // Méthode pour sauvegarder le thème préféré de l'utilisateur
  savePreferredTheme(theme: string) {
    localStorage.setItem('preferredTheme', theme);
  }

  // Méthode pour redémarrer l'application
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
