import { Component } from '@angular/core';

@Component({
  selector: 'baufi24-ng-elements-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
  public currentInfo: string;

  constructor() {
    this.title = 'baufi24-disclaimer';
    this.currentInfo = 'Moin Leute...';
  }

  displayOutput(value: string) {
    console.log(value);
  }
}
