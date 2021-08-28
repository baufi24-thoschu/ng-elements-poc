import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {VideoModule} from '@baufi24-ng-elements/video';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VideoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
