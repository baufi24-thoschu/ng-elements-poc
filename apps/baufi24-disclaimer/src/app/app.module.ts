import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement, NgElementConstructor } from '@angular/elements';

import { VideoModule } from '@baufi24-ng-elements/video';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VideoModule],
  // exports: [AppComponent],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  private readonly ngCustomElement: NgElementConstructor<AppComponent>;

  constructor(private injector: Injector) {
    this.ngCustomElement = createCustomElement(AppComponent, {
      injector
    });
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    // console.log(appRef);
    // console.log(this.ngCustomElement);
    window.customElements.define('baufi24-disclaimer', this.ngCustomElement);
  }
}
