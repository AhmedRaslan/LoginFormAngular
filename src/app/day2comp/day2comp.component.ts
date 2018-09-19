import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-day2comp',
  templateUrl: './day2comp.component.html',
  styleUrls: ['./day2comp.component.css']
})

export class Day2compComponent implements OnInit {
  name={user:'',pass:''}
  onchange(error){
    error.hidden=true;
  }
  submit(frn,error){
    if(frn.value.username=='admin' && frn.value.password=='admin'){
      this.rout.navigate(['/landingpage']);
    }
    else{
      error.hidden=false;
    }

  }
  constructor(private rout:Router) { }
  ngOnInit() {

  }

}
