import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { UserI } from "../../../shared/models/user.interface"
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private notifierService: NotifierService
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  ngOnInit(){}

  onLogin(form: UserI){
    this.authService.loginByEmail(form)
      .then(res =>{
        console.log('Sucessfully', res)
        this.notifierService.notify("success", 'Login Sucess')
        // this.snackBar.open("Login Sucess",'Sucess',{
        //   duration: 5000,
        //   verticalPosition: "top"
        // })
        this.router.navigate(['/'])
      })
      .catch(err => {
        console.log('Erro', err)
        this.notifierService.notify("error", err.message)
        // this.snackBar.open(err.message,'Erro',{
        //   duration: 5000,
        //   verticalPosition: "top"
        // })
      });
  }

}
