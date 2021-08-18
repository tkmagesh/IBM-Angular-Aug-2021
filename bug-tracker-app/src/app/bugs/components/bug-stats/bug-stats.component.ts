import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Bug } from '../../models/bug';

@Component({
  selector: 'app-bug-stats',
  templateUrl: './bug-stats.component.html',
  styleUrls: ['./bug-stats.component.css']
})
export class BugStatsComponent implements OnInit {

  @Input('data')
  bugs : Bug[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

 /* 
  getClosedCount() : number {
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
  }
  */

}
