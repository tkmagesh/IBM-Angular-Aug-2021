import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  /* declarations -> to register all the UI entities of the app (Component, Directives & Pipes) */
  declarations: [
    AppComponent,
    GreeterComponent
  ],
  /* imports - other modules that this module depends on */
  imports: [
    BrowserModule
  ],
  /* providers -> to register all the NON UI entites of the application */
  providers: [],
  /* bootstrap - define the top-most components in the application UI */
  bootstrap: [
    AppComponent,
    GreeterComponent
  ]
})
export class AppModule { }
