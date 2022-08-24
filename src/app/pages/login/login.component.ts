import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: any = FormGroup;
  submitted = false;
  disableButton:boolean = false;
  hide: boolean = true;
  destroy$: Subject<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private title: Title,
    private route: Router
  ) {
    this.destroy$ = new Subject<boolean>();

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Panel | Login');
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  get form() {return this.loginForm.controls; }

  login(): boolean {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return false;
    }

    this.disableButton = true;

    const params = {
      email: this.form.email.value,
      password: this.form.password.value,
    };

    console.log(params);

    return true;
  }

}
