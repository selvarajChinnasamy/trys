import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, fb: FormBuilder, public loginService: LoginService) {
    this.loginForm = fb.group({
      'userEmail': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  loginDetails() {
      this.router.navigate(['/category']);  
    }
}
