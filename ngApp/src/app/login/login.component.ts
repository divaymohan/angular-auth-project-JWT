import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public griting = ""
  public gritingclass = ""
  setClass(grit,gritclass){
    this.griting = grit
    this.gritingclass = gritclass
}
  loginUserData={}
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res=> {
        this.setClass('Login Successfull','authSuccess')
        localStorage.setItem('token',res.token)
        this._router.navigate(['/special'])
      },
      err => this.setClass('Login UnSuccessfull','authUnsuccess')
    )
    console.log(this.loginUserData)
  }

}
