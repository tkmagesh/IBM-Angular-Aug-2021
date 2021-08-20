import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UtilsModule } from './utils/utils.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugStatsComponent } from './bugs/components/bug-stats/bug-stats.component';
import { BugEditComponent } from './bugs/components/bug-edit/bug-edit.component';
import { ClosedCountPipe } from './bugs/pipes/closed-count.pipe';
import { NotFoundComponent } from './not-found.component';
import { BugDetailsComponent } from './bugs/components/bug-details/bug-details.component';

let routes : Routes = [
  {path: '', redirectTo: '/bugs', pathMatch: 'full' },
  {path : 'add', component : BugEditComponent},
  {path : 'bugs', component : BugsComponent},
  {path : 'details/:id', component : BugDetailsComponent},
  {path : '**', component : NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountPipe,
    BugDetailsComponent
  ],
  imports: [
    BrowserModule,
    UtilsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
