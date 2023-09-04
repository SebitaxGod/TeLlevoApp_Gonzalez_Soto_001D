import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email?: string; // Propiedad opcional
  password?: string; // Propiedad opcional

  constructor(private navCtrl: NavController) {}

  login() {
    // Redirigir al usuario a la página "home" después del inicio de sesión.
    this.navCtrl.navigateRoot('/home'); // Cambia '/home' por la ruta que deseas para la página "home."
  }
}