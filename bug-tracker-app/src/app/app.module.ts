import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugStatsComponent } from './bugs/components/bug-stats/bug-stats.component';
import { BugEditComponent } from './bugs/components/bug-edit/bug-edit.component';
import { ClosedCountPipe } from './bugs/pipes/closed-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule,
    UtilsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
