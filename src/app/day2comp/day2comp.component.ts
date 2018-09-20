import { UserlistService } from './../userlist.service';
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
  loginerr:boolean;
  submit(frn,error){
    if(this.userserv.submitserv(frn)){
      this.rout.navigate(['/home']);
    }
    else{
      error.hidden=false;
      this.loginerr=true;
    }

  }

  constructor(private rout:Router, private userserv:UserlistService) {
  }
  ngOnInit() {

  }

}
