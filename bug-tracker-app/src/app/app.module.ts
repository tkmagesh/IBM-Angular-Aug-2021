import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { TrimTextPipe } from './bugs/pipes/trim-text.pipe';
import { ElapsedPipe } from './bugs/pipes/elapsed.pipe';
import { BugStatsComponent } from './bugs/components/bug-stats/bug-stats.component';
import { BugEditComponent } from './bugs/components/bug-edit/bug-edit.component';
import { ClosedCountPipe } from './bugs/pipes/closed-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    TrimTextPipe,
    ElapsedPipe,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
