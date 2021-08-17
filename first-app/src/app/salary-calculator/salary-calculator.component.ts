import { Component, OnInit } from '@angular/core';
import { SalaryCalculatorModel } from './salary-calculator.model'

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent implements OnInit {

  /* 
  model : SalaryCalculatorModel ;

  constructor(model : SalaryCalculatorModel) { 
    this.model = model;
  } 
  */

  constructor(public model : SalaryCalculatorModel){
  }

  ngOnInit(): void {
  }

  setBasic(value : string) {
    this.model.basic = parseInt(value);
  }

  setHra(value : string) {
    this.model.hra = parseInt(value);
  }

  setDa(value : string) {
    this.model.da = parseInt(value);
  }

  setTax(value : string) {
    this.model.tax = parseInt(value);
  }

}
