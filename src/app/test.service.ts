import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  getapiurl:string="https://jsonplaceholder.typicode.com/users"

  constructor(private httpclient:HttpClient) { }

  getUsersData():Observable<User[]>{
    console.log("in getUsersData()");
    return this.httpclient.get<User[]>(this.getapiurl);
  }
}
