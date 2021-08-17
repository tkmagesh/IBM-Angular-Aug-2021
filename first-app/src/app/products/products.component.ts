import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : string[] = [ ];

  constructor() { }

  ngOnInit(): void {
  }
  
  onBtnAddNewClick(productName : string){
    this.products.push(productName);
  }

  onBtnRemoveClick(productName : string){
    this.products.splice(this.products.indexOf(productName), 1);
  }


}
