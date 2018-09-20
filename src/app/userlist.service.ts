import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  logged:boolean;
  submitserv(frn){
    if(frn.value.username=='admin' && frn.value.password=='admin'){
      this.logged=true;
      localStorage.setItem('logged','true');
      return true;
    }
    else{
      return false;
    }
  }

  loggedin(){
    if(localStorage.getItem('logged')==null){
      this.rout.navigate(['/login']);
    }else{
      this.rout.navigate(['/home']);
    }
  }


  userurl='https://jsonplaceholder.typicode.com/users/';
  getalluser():Observable<User[]>{
    return this.http.get<User[]>(this.userurl);
  }
  getuserbyid(id):Observable<User>{
    return this.http.get<User>(this.userurl+id);
  }
  constructor(private http:HttpClient, private rout:Router) {
    this.loggedin();
   }
}
