import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {

  // users:User[]=[];
  // constructor(private testservive:TestService) { }

  ngOnInit(): void {
  }
  // printdata(event:any){
  //   this.testservive.getUsersData().subscribe(users=>{
  //    this.users=users;

  //   })

}

