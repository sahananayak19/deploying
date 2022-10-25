import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  users:User[]=[];
  constructor(private testservive:TestService) { }


   ngOnInit(): void {
  }
  printdata(event:any){
    this.testservive.getUsersData().subscribe(User=>{
     this.users=User;

    });


}
}
