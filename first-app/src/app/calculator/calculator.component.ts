import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  n1 : number = 0;
  n2 : number = 0;
  result : number = 0;

  constructor() { }

  setN1(value : string){
    this.n1 = parseInt(value);
  }

  setN2(value : string){
    this.n2 = parseInt(value);
  }

  ngOnInit(): void {
  }

  onBtnAddClick(){
    this.result = this.n1 + this.n2;
  }

  onBtnSubClick(){
    this.result = this.n1 - this.n2;
  }

  onBtnMulClick(){
    this.result = this.n1 * this.n2;
  }

  onBtnDivClick(){
    this.result = this.n1 / this.n2;
  }

}
