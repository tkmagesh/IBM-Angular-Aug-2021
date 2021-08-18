import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  bugs : Bug[] = [];

  private currentBugId: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  onBtnAddNewClick(newBugName : string){
    const newBug = {
      id : ++this.currentBugId,
      name : newBugName,
      isClosed : false,
      createdAt : new Date()
    };
    this.bugs.push(newBug);
  }

}
