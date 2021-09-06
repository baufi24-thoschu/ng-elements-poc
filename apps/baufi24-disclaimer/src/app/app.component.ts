import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Placeholder, prop } from 'ramda';

@Component({
  selector: 'baufi24-ng-elements-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
  public currentInfo: string;

  @Input()
  public items = [{desc: 'Eat burger and drink a lot of beer...', id: 1}];

  @Output()
  public itemClicked: EventEmitter<string>;

  constructor() {
    this.title = 'baufi24-disclaimer';
    this.currentInfo = 'Moin Leute...';
    this.itemClicked = new EventEmitter<string>();
  }

  public displayOutput(value: string): void {
    window.console.info(value);
  }

  public handleClick(element: Event): void {
    const eventTarget: HTMLImageElement = element.target as HTMLImageElement;
    this.itemClicked.emit(prop('currentSrc', eventTarget));
  }
}
