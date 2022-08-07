import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Login } from '../modals/article';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm | any;

  isUserRegistered: boolean = true;
  message: string = '';

  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const userDetails = this.loginForm.value;
    this.dataService.login(userDetails).subscribe((loginRes: any) => {
      // console.log(loginRes);

      if (loginRes.status === true) {
        // to set the global flag for logged in user
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('token', loginRes.token);
        this.router.navigate(['/']);
      } else {
        this.isUserRegistered = false;
        this.message = loginRes.msg;
        this.loginForm.reset();
      }
    });
  }
}
