import { Component } from '@angular/core';
import { UserService, Credentials } from '../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService: UserService, private router: Router) { }

  login() {
    const creds: Credentials = this.loginForm.value;
    this.userService.login(creds).subscribe(() => this.router.navigate(['todo']))
  }

}
