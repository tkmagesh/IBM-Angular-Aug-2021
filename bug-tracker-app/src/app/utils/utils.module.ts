import { NgModule } from "@angular/core";
import { ElapsedPipe } from "./pipes/elapsed.pipe";
import { SortPipe } from "./pipes/sort.pipe";
import { TrimTextPipe } from './pipes/trim-text.pipe';

@NgModule({
    declarations: [
        ElapsedPipe,
        TrimTextPipe,
        SortPipe
    ],
    exports: [
        ElapsedPipe,
        TrimTextPipe,
        SortPipe
    ]
})
export class UtilsModule{

}