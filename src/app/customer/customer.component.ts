import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  //  users:User[]=[];
  // constructor(private testservive:TestService) { }

  ngOnInit(): void {
  }

  // printdata(event:any){
  //    this.testservive.getUsersData().subscribe(users=>{
  //     this.users=users;

  //    })
  }


