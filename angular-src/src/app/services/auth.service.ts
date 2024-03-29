import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import { Observable, interval, pipe } from 'rxjs';
import {switchMap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	authToken: any;
	user:any;

  constructor(private http:Http) { }

  registerUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post('http://localhost:3001/users/register',user,{headers:headers})
  	map(res => res);

  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/users/authenticate',user,{headers:headers})
    map(res => res);
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    console.log(this.authToken);
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3001/users/profile',{headers:headers})
    map(res => res);
  }

  getProduct(){
    let headers = new Headers();
    this.loadToken();
    // console.log(this.authToken);
    // headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3001/products/product',{headers:headers})
    map(res => res);
  }


  storeUserData(token,user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', user);
    this.authToken = token;
    this.user - user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    console.log('das');
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
