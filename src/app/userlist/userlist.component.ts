import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserlistService } from '../userlist.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  @Input() child:User;
  constructor(rout:ActivatedRoute) {
  }

  ngOnInit() {
  }

}
