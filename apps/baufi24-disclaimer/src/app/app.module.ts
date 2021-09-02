import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement, NgElementConstructor } from '@angular/elements';

import { VideoModule } from '@baufi24-ng-elements/video';

import { equals } from 'ramda';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VideoModule],
  exports: [AppComponent],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  private static readonly zeroElementsInHTMLCollection = 0;

  private static readonly customElementName = 'baufi24-disclaimer';
  private readonly ngCustomElement: NgElementConstructor<AppComponent>;

  constructor(private injector: Injector) {
    this.ngCustomElement = createCustomElement(AppComponent,{
      injector
    });
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    const htmlCollection: HTMLCollection = window.document.getElementsByTagName(AppModule.customElementName);

    if(equals(htmlCollection.length, AppModule.zeroElementsInHTMLCollection))
      appRef.bootstrap(AppComponent);
    else
      window.customElements.define(AppModule.customElementName, this.ngCustomElement);
  }
}
