import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateTo(page: string) {
    // Aquí debes definir las rutas correspondientes para cada página.
    switch (page) {
      case 'home':
        this.router.navigate(['/home']);
        break;
        case 'historial':
          this.router.navigate(['/historial']);
          break;
      
    }
  }
}
export class ExampleComponent {
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
}
