import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {

  public isVisibly = false;


  public onActive(): void {
    this.isVisibly = true;
  }

  public onInactive(): void {
    this.isVisibly = false;
  }

}


