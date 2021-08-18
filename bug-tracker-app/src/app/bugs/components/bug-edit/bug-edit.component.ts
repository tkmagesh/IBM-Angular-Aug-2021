import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Bug } from '../../models/bug';
import { BugOperationsService } from '../../services/bugOperations.service';

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.css']
})
export class BugEditComponent implements OnInit {

  @Output()
  created : EventEmitter<Bug> = new EventEmitter<Bug>();

  constructor(private bugOperations : BugOperationsService) {
    
   }

  ngOnInit(): void {
  }

  onBtnAddNewClick(newBugName : string){
    const newBug = this.bugOperations.createNew(newBugName);
    this.created.emit(newBug);
  }

}
