import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Bug } from '../../models/bug';
import { BugOperationsService } from '../../services/bugOperations.service';

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.css']
})
export class BugEditComponent implements OnInit {

  newBugName : string = '';

  @Output()
  created : EventEmitter<Bug> = new EventEmitter<Bug>();

  constructor(private bugOperations : BugOperationsService, private router : Router) {
    
  }

  ngOnInit(): void {
  }

  onBtnAddNewClick(){
    /* this.bugOperations
      .createNew(this.newBugName)
      .subscribe(newBug => this.created.emit(newBug)); */

      this.bugOperations
        .createNew(this.newBugName)
        .subscribe(newBug => this.router.navigate(['bugs']));
    
  }

}
