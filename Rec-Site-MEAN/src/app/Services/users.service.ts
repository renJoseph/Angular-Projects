import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private htpp: HttpClient) { }

  public createUser(){

  }

  public getUsers(){
    // return this.htpp.get(USERS_URL)
    // environment.prop
  }
  
  public getUserByEmail(){

  }

  public updateUser(){

  }

  public deleteUser(){

  }

}
