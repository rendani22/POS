import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name: Array<string>;

  constructor(private authService:AuthService,
  				private router:Router) { }

  ngOnInit() {
  	this.authService.getProduct().subscribe(product =>{
  		// this.name = product.name;
  		let productList = JSON.parse(product["_body"]);
  		let newList = [];

  		for(var i = 0; i<productList.length; i++){
  			newList.push(productList[i])
  		}
  		 this.name =  newList;
  		console.log(productList);
  	},
  	err =>{
  		console.log(err);
  		return false;
  	}
  	);
  }

}
