import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { SnackbarUiService } from 'src/app/shared/snackbar-ui.service';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.scss']
})
export class RegsiterComponent implements OnInit {

  showLoginMessage = false;

  constructor(private authService: AuthenticationService, private router: Router, private snackbar: SnackbarUiService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.signUp(form.value).subscribe(
      res => {
        this.router.navigateByUrl('/signin');
      },
      err => {
        if (err.status === 422) {
          this.showLoginMessage = true;
          this.snackbar.show('There was an error with the request. Status: ' + err.status, 'alert-danger', 3500);
        } else {
          this.snackbar.show('There was an error with the request. Status: ' + err.status, 'alert-danger', 3500);
        }
      }
    );
  }

}
