import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login-pages.component.html',
})
export class LoginPagesComponent {

  private authService = inject( AuthService )
  private fb = inject( FormBuilder );

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  login() {
    const { email, password } = this.myForm.value;
    this.authService.login(email, password)
      .subscribe( success => {
        console.log(success);
        
      })
    
  }
}
