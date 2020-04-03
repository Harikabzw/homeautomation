import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { SnackbarUiService } from 'src/app/shared/snackbar-ui.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signingIn: boolean=false;

  constructor(private authService: AuthenticationService, private router: Router, private snackbar: SnackbarUiService) {
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/');
    }
  }

  onSubmit(form: NgForm) {
    this.signingIn = true;
    this.authService.signIn(form.value).subscribe(
      res => {
        this.authService.setJWT(res['token']);
        this.router.navigateByUrl('/');
      },
      err => {
        this.signingIn = false;
        this.snackbar.show(err.error.message, 'alert-danger', 3500);
      }
    );
  }
  showRegister(){
    this.router.navigateByUrl('/signup');
  }

}
