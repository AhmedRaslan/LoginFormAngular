import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserlistService } from '../userlist.service';

@Component({
  selector: 'app-userdtl',
  templateUrl: './userdtl.component.html',
  styleUrls: ['./userdtl.component.css']
})
export class UserdtlComponent implements OnInit {
  goback(){
    this.router.navigate(['/home']);
  }
  myuser:User;
  constructor(userserv:UserlistService, rout:ActivatedRoute, private router:Router) {
    userserv.getuserbyid(
      rout.snapshot.params['id']).subscribe(child=>this.myuser=child)
  }
  ngOnInit() {
  }

}
