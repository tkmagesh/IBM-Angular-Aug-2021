import { NgModule } from "@angular/core";
import { ElapsedPipe } from "./pipes/elapsed.pipe";
import { TrimTextPipe } from './pipes/trim-text.pipe';

@NgModule({
    declarations: [
        ElapsedPipe,
        TrimTextPipe
    ],
    exports: [
        ElapsedPipe,
        TrimTextPipe
    ]
})
export class UtilsModule{

}