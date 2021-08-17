import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { SalaryCalculatorModel } from './salary-calculator/salary-calculator.model';
import { ProductsComponent } from './products/products.component';

@NgModule({
  /* declarations -> to register all the UI entities of the app (Component, Directives & Pipes) */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    SalaryCalculatorComponent,
    ProductsComponent
  ],
  /* imports - other modules that this module depends on */
  imports: [
    BrowserModule
  ],
  /* providers -> to register all the NON UI entites of the application */
  /* The registered services will be created as a singleton and the same instance will be injected wherever it is need within the module */
  providers: [
    SalaryCalculatorModel
  ],
  /* bootstrap - define the top-most components in the application UI */
  bootstrap: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    SalaryCalculatorComponent,
    ProductsComponent
  ]
})
export class AppModule { }
