import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public griting = ""
  public gritingclass = ""
  setClass(grit,gritclass){
    this.griting = grit
    this.gritingclass = gritclass


  }
  registerUserData = {}
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }
  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res=> {
        this.setClass('Registration Successfull','authSuccess')
        localStorage.setItem('token',res.token)
        this._router.navigate(['/special'])
      },
      err => this.setClass('Registration UnSuccessfull','authUnsuccess')
    )
    
  }

}
