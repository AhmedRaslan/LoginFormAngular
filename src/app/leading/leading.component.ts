import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-leading',
  templateUrl: './leading.component.html',
  styleUrls: ['./leading.component.css']
})
export class LeadingComponent implements OnInit {
  goback(){
    this.rout.navigate(['/login']);
  }
  constructor(private rout:Router) { }

  ngOnInit() {
  }

}
