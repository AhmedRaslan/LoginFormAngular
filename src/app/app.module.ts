import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Day2compComponent } from './day2comp/day2comp.component';
import { MydirDirective } from './mydir.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LeadingComponent } from './leading/leading.component';


@NgModule({
  declarations: [
    AppComponent,
    Day2compComponent,
    MydirDirective,
    LeadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'login', component: Day2compComponent},
      {path:'landingpage',component:LeadingComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
