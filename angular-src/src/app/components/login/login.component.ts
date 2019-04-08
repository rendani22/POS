import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username: String;
	password: String;

  constructor(private authService: AuthService,
  	private router: Router,
  	private flashMessage:FlashMessagesService
  	) { }

  ngOnInit() {
  }

  onLoginSubmit(){
  	const user = {
  		username : this.username,
  		password : this.password
  	}

  	this.authService.authenticateUser(user).subscribe(data =>{
  		let success = JSON.parse(data[  "_body"]).success;
  		let msg = JSON.parse(data["_body"]).msg;
  		let token = JSON.parse(data["_body"]).token;
  		let username = JSON.parse(data["_body"]).username;
  		let info = JSON.parse(data["_body"]);

  		if(success){
  			 this.authService.storeUserData(token,info.user.username);
  			 this.flashMessage.show('Welcome '+ info.user.name, {
  				cssClass: 'alert-success',
  				timeout: 3000
  			});
  			this.router.navigate(['dashboard']);
  		}else{
  			this.flashMessage.show(msg, {
  				cssClass: 'alert-danger',
  				timeout: 3000
  			});
  			this.router.navigate(['login']);
  		}
  	});
  }

}
