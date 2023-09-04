import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-olvido',
  templateUrl: 'olvido.page.html',
  styleUrls: ['olvido.page.scss'],
})
export class OlvidoPage {
  email?: string; // Propiedad opcional
  password?: string; // Propiedad opcional

  constructor(private navCtrl: NavController) {}

  olvido() {
    // Redirigir al usuario a la página "home" después del inicio de sesión.
    this.navCtrl.navigateRoot('/home'); // Cambia '/home' por la ruta que deseas para la página "home."
    
  }
  goToLoginPage() {
    this.navCtrl.navigateForward('/login'); // Usar la ruta relativa '/login'
  }
}