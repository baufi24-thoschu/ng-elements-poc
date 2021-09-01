# ⚓ Baufi24NgElements ⚓

<p style="text-align: center;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Offical_Baufi24_Logo_released_2020.svg/2560px-Offical_Baufi24_Logo_released_2020.svg.png" width="100%">
</p>

This project was generated using [Nx](https://nx.dev)

## Quickstart

Run:  `npm ci`

      ng build
      
      npm run serve:webcomponent

## Generate a workspace

Run: `npx create-nx-workspace baufi24-ng-elements --preset=angular` generated the nx-workspace.

## Generate a library

Run `npx ng g lib video` generated the library.

> You can also use any of the plugins to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@baufi24-ng-elements/video`.

## Generate a component

Run `npx ng g c video --project=video` generated the component.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

## Adding @angular/elements to a project

Run `add @angular/elements [--project=baufi24-disclaimer]` to add dependencies and polyfills.

## app.module.ts configuration 

### apps/baufi24-disclaimer/src/app/app.module.ts

````angular2html
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

  ngDoBootstrap(): void {
    window.customElements.define('baufi24-disclaimer', this.ngCustomElement);
  }
}

````

## Development server

Run `npx run serve:webcomponent` for a dev server.

## Adding @nrwl/storybook

Run `npm install @nrwl/storybook` for storybook support.

## Generate the storybook-configuration

Run `npx ng g storybook-configuration video` generated the storybook-configuration.

## Run storybook UI

Run `npx ng run video:storybook` for storybook server. Navigate to address shown.

## Further informations

[In terms of: `npm run serve:webcomponent:ssl`](https://github.com/FiloSottile/mkcert)
