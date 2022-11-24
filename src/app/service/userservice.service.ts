import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  
  userdata(){
    return this.http.get("http://localhost:3000/user_reg");
  }
}
