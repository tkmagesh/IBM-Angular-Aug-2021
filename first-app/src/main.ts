import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/* 
import * as calc from './calculator'
console.log(calc) 
*/

/* 
import * as calc from './calculator'
console.log(calc.add(100,200)) 
*/

/* 
import * as calc from './calculator';
const add = calc.add;
console.log(add(100,200)) 
*/

/* 
import * as calc from './calculator'
const { add } = calc;
console.log(add(100,200))
*/

import { add } from './calculator'
console.log(add(1000,2000))

//importing the default exported entity
import isOdd from './calculator'
console.log(isOdd(100))

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
