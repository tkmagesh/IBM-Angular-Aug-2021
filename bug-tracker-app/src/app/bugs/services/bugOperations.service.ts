import { Bug } from "../models/bug";

export class BugOperationsService{
    private currentBugId: number = 0;

    createNew(newBugName:string) : Bug {
        const newBug = {
            id : ++this.currentBugId,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        };
        return newBug;
    }

    toggle(bugToToggle : Bug) : void {
        bugToToggle.isClosed = !bugToToggle.isClosed;
    }
}