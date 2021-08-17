import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  /* declarations -> to register all the UI entities of the app (Component, Directives & Pipes) */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent
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
    GreeterComponent,
    CalculatorComponent
  ]
})
export class AppModule { }
