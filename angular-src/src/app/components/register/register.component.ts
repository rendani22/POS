import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	name: String;
	username: String;
	email: String;
	password: String;


  constructor(
  	private ValidateService: ValidateService, 
  	private flashMessage: FlashMessagesService,
  	private authService: AuthService,
  	private router: Router
  	) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
  	const user = {
  		name : this.name,
  		username : this.username,
  		email : this.email,
  		password : this.password
  	}

  	//Req fileds
  	if(!this.ValidateService.validateRegister(user)){
  		this.flashMessage.show("Please enter all the fileds", {cssClass: 'alert-danger text-center', timeour:3000});
  		return false;
  	}

  		//Validate email
  	if(!this.ValidateService.validateEmail(user.email)){
  		this.flashMessage.show("Enter valid email", {cssClass: 'alert-danger text-center', timeour:3000});
  		return false;
  	}
  	//Register user
  	this.authService.registerUser(user).subscribe(data => {
  		if(data.ok){
  			this.flashMessage.show("Account succesfuly registered", {cssClass: 'alert-success text-center', timeour:3000});
  			this.router.navigate(['/login'])
  		}else{
  			this.flashMessage.show("Somrthing went wrong", {cssClass: 'alert-danger text-center', timeour:3000});
  			this.router.navigate(['/register'])
  		}
  	});

  }


}
