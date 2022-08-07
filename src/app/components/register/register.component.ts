import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Signup } from '../modals/article';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(userDetails: Signup): void {
    console.log(userDetails);
    this.dataService.signup(userDetails).subscribe((signupRes: any) => {
      if (signupRes.status === true) {
        // to set the global flag for logged in user
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('token', signupRes.token);
        this.router.navigate(['/']);
      }
    });
  }
}
