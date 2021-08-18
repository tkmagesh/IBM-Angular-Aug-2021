import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  bugs : Bug[] = [];

  constructor(private bugOperations : BugOperationsService) {

   }

  ngOnInit(): void {
  }

  onBtnAddNewClick(newBugName : string){
    const newBug = this.bugOperations.createNew(newBugName);
    this.bugs.push(newBug);
  }

  onBugNameClick(bug : Bug){
    this.bugOperations.toggle(bug)
  }

  onBtnRemoveClick(bugToRemove : Bug){
    this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
  }

  onBtnRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed);
  }

  getClosedCount() : number {
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
  }

}
