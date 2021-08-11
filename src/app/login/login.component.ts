import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute, private loaderService: LoaderService,
    private router: Router, private auth: AuthService) {
    this.loginForm = this.formBuilder.group([])

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  get loader() { return this.loaderService.getLoader(); }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    this.auth.login('username', 'password');
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.auth.login(this.formControls.username.value, this.formControls.password.value)
      .subscribe(
        data => {
          this.router.navigate(['/home']);
        },
        error => {
          this.error = error;
          this.loading = false;
        },
        () => {
          this.loading = false;

        }
      );
  }

}
