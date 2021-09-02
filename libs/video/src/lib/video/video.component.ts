import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'baufi24-ng-elements-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent /*implements OnInit*/ {

  @Input()
  public info: string;

  @Output()
  public emitOutput: EventEmitter<string>;

  constructor() {
    this.info = 'null';
    this.emitOutput = new EventEmitter();
  }

  // ngOnInit(): void {}

  public onClick(): void {
    console.log('onClick');
    this.emitOutput.emit(this.info);
  }
}
