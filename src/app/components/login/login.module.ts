import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ButtonPrimaryModule } from 'src/app/shared/button/button-primary.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ButtonPrimaryModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
