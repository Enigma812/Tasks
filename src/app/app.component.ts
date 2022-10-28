import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {

  public isShown = false;


  public toggleMenu(): void {
    if (this.isShown === false) {
      this.isShown = true
    } else {
      this.isShown = false
    };
  }
}


