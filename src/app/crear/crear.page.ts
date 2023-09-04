import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-crear',
  templateUrl: 'crear.page.html',
  styleUrls: ['crear.page.scss'],
})
export class CrearPage {
  email?: string; // Propiedad opcional
  password?: string; // Propiedad opcional

  constructor(private navCtrl: NavController) {}

  crear() {
    // Redirigir al usuario a la página "home" después del inicio de sesión.
    this.navCtrl.navigateRoot('/home'); // Cambia '/home' por la ruta que deseas para la página "home."
    
  }
  goToLoginPage() {
    this.navCtrl.navigateForward('/login'); // Usar la ruta relativa '/login'
  }
}