import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Login } from '../modals/article';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(userDetails: Login): void {
    console.log(userDetails);
    this.dataService.login(userDetails).subscribe((loginRes: any) => {
      // console.log(loginRes);

      if (loginRes.status === true) {
        // to set the global flag for logged in user
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('token', loginRes.token);
        this.router.navigate(['/']);
      }
    });
  }
}
