import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/bug";
import { BugApi } from "./bugApi.service";
import { BugStorageService } from "./bugStorage.service";

@Injectable({
    providedIn: "root"
})
export class BugOperationsService{
   
    constructor(private bugStorage : BugStorageService, private bugApi : BugApi){

    }

    getAll() : Observable<Bug[]> {
        return this.bugApi.getAll();
    }

    createNew(newBugName:string) : Bug {
        const newBug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        };
        return this.bugStorage.save(newBug)
    }

    toggle(bugToToggle : Bug) : Bug {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
        this.bugStorage.save(toggledBug);
        return toggledBug;
    }

    remove(bugToRemove : Bug) : void {
        this.bugStorage.remove(bugToRemove);
    }
}
    