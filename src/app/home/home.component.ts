import { UserlistService } from './../userlist.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  alluser:User[];
  goback(){
    this.rout.navigate(['/login']);
  }
  constructor(userserv:UserlistService, private rout:Router) {
    userserv.getalluser().subscribe(myuser=>this.alluser=myuser)
  }


  ngOnInit() {
  }

}
