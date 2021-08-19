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
    this.bugs = this.bugOperations.getAll()
  }

  onNewBugCreated(newBug : Bug){
    this.bugs = [...this.bugs, newBug];
  }

  onBugNameClick(bugToToggle : Bug){
    const toggledBug = this.bugOperations.toggle(bugToToggle)
    this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
  }

  onBtnRemoveClick(bugToRemove : Bug){
    this.bugOperations.remove(bugToRemove)
    this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
  }

  onBtnRemoveClosedClick(){
    this.bugs
      .filter(bug => bug.isClosed)
      .forEach((bug) => this.onBtnRemoveClick(bug))
  }

  
}
