import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  
  constructor(private user: UserService) { 
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
   }

  ngOnInit() {
    this.form.valueChanges.subscribe(data => {
      console.log('CHANGE:', data);
    })
  }

  logInFunction(){
    this.user.logIn(this.form.value)
  }
}
