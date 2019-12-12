import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public logIn(x){
    return this.http.get("https://us-central1-qac-sandbox-531db.cloudfunctions.net/login", {params: x}).subscribe(data => {
console.log(data)
    })    
  }
}
