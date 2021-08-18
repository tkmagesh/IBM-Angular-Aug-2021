import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { ClosedCountPipe } from './bugs/pipes/closed-count.pipe';
import { ElapsedPipe } from './bugs/pipes/elapsed.pipe';
import { BugStatsComponent } from './bugs/components/bug-stats/bug-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    ClosedCountPipe,
    ElapsedPipe,
    BugStatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
