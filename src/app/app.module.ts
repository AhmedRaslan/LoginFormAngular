import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Day2compComponent } from './day2comp/day2comp.component';
import { MydirDirective } from './mydir.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LeadingComponent } from './leading/leading.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressdirDirective } from './addressdir.directive'


@NgModule({
  declarations: [
    AppComponent,
    Day2compComponent,
    MydirDirective,
    LeadingComponent,
    HomeComponent,
    AddressdirDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'login', component: Day2compComponent},
      {path:'landingpage',component:LeadingComponent},
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'/login',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
