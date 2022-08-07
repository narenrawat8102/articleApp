import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Signup } from '../modals/article';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') myForm: NgForm | any;

  isUserRegistered: boolean = false;
  message: string = '';

  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const userDetails = this.myForm.value;
    this.dataService.signup(userDetails).subscribe((signupRes: any) => {
      if (signupRes.status === true) {
        // to set the global flag for logged in user
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('token', signupRes.token);
        this.router.navigate(['/']);
      } else {
        this.isUserRegistered = true;
        this.message = signupRes.msg;
        this.myForm.reset();
      }
    });
  }
}
